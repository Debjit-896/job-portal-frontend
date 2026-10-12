import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

/**
 * Individual Toast notification item.
 * Slides in from Left to Right on entry.
 * Slides out from Right to Left (reverse) on exit.
 */
export default function ToastItem({ toast, onRemove }) {
  const { id, type = 'info', title, message, duration = 5000 } = toast;
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef(null);
  const remainingTimeRef = useRef(duration);
  const startTimeRef = useRef(null);

  const startTimer = () => {
    if (duration <= 0) return;
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      handleClose();
    }, remainingTimeRef.current);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      if (startTimeRef.current) {
        const elapsed = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
      }
    }
  };

  const resumeTimer = () => {
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Wait for the slideOutToLeft animation duration (320ms) before unmounting
    setTimeout(() => {
      onRemove(id);
    }, 320);
  };

  // Icon and default title selection
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'info':
      default:
        return <Info size={20} />;
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case 'success':
        return 'Success';
      case 'error':
        return 'Error';
      case 'warning':
        return 'Attention';
      case 'info':
      default:
        return 'Notice';
    }
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`toast-item-wrapper toast-type-${type} ${isExiting ? 'toast-slide-out' : 'toast-slide-in'}`}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <div className="toast-inner">
        <div className="toast-icon-badge">
          {getIcon()}
        </div>

        <div className="toast-content">
          <div className="toast-header-row">
            <span className="toast-title">{title || getDefaultTitle()}</span>
            <button
              type="button"
              className="toast-close-btn"
              onClick={handleClose}
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
          <div className="toast-message">{message}</div>
        </div>
      </div>

      {duration > 0 && (
        <div className="toast-progress-track">
          <div
            className="toast-progress-fill"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      )}
    </div>
  );
}
