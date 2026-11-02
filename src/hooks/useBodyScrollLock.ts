import { useEffect } from 'react';

// Active lock counter to support nested/stacked modals safely
let activeModalLocks = 0;
let previousOverflow = '';
let previousPaddingRight = '';

/**
 * Custom hook to disable background page scrolling when a modal or overlay is active.
 * Restores original scroll behavior when the modal is closed.
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    if (activeModalLocks === 0) {
      previousOverflow = document.body.style.overflow;
      previousPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width to prevent page layout jumping
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';
    }

    activeModalLocks++;

    return () => {
      activeModalLocks--;
      if (activeModalLocks <= 0) {
        activeModalLocks = 0;
        document.body.style.overflow = previousOverflow || '';
        document.body.style.paddingRight = previousPaddingRight || '';
      }
    };
  }, [isLocked]);
}

export default useBodyScrollLock;

