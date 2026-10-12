import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import ToastContainer from './ToastContainer';

const ToastContext = createContext(null);

let toastIdCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(({ type = 'info', title, message, duration = 5000 }) => {
    const id = `toast-${++toastIdCounter}-${Date.now()}`;
    const newToast = { id, type, title, message, duration };

    setToasts((prev) => {
      // Keep up to 4 simultaneous toasts to avoid cluttering screen
      const trimmed = prev.length >= 4 ? prev.slice(prev.length - 3) : prev;
      return [...trimmed, newToast];
    });

    return id;
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  // Listen for global custom events from non-React contexts (e.g. Axios interceptors)
  useEffect(() => {
    const handleGlobalToast = (e) => {
      if (e.detail) {
        showToast(e.detail);
      }
    };

    window.addEventListener('app:toast', handleGlobalToast);
    return () => {
      window.removeEventListener('app:toast', handleGlobalToast);
    };
  }, [showToast]);

  const toast = {
    show: showToast,
    success: (message, title = 'Success', duration = 5000) =>
      showToast({ type: 'success', title, message, duration }),
    error: (message, title = 'Error', duration = 6500) =>
      showToast({ type: 'error', title, message, duration }),
    warning: (message, title = 'Warning', duration = 5500) =>
      showToast({ type: 'warning', title, message, duration }),
    info: (message, title = 'Notice', duration = 5000) =>
      showToast({ type: 'info', title, message, duration }),
    clearAll,
  };

  return (
    <ToastContext.Provider value={toast}>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Global helper to trigger toasts from outside React component tree
export const globalToast = {
  success: (message, title = 'Success', duration = 5000) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'success', title, message, duration } }));
    }
  },
  error: (message, title = 'Error', duration = 6500) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'error', title, message, duration } }));
    }
  },
  warning: (message, title = 'Warning', duration = 5500) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'warning', title, message, duration } }));
    }
  },
  info: (message, title = 'Notice', duration = 5000) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'info', title, message, duration } }));
    }
  },
};
