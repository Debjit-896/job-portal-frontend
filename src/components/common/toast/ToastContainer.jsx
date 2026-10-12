import ToastItem from './ToastItem';
import './Toast.css';

/**
 * Toast portal container that renders active toasts fixed on bottom-left screen.
 */
export default function ToastContainer({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-portal-container" aria-label="Notifications">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
}
