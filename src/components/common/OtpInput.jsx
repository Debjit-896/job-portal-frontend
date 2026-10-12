import { useEffect, useRef } from 'react';

/**
 * Reusable modern 6-Digit OTP input component.
 * Features:
 * - 6 split digit boxes
 * - Auto-focus first input on mount
 * - Full paste handling (splits 6 digits across inputs)
 * - Backspace / Delete backwards navigation
 * - Left/Right arrow key navigation
 * - Numeric-only filtering
 * - Disabled state support
 */
export default function OtpInput({
  value = ['', '', '', '', '', ''],
  onChange,
  disabled = false,
  length = 6,
  autoFocus = true,
  className = '',
  hasError = false,
}) {
  const inputRefs = useRef([]);

  // Auto-focus first input on mount
  useEffect(() => {
    if (autoFocus && inputRefs.current[0] && !disabled) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus, disabled]);

  const handleChange = (index, e) => {
    const rawVal = e.target.value;
    const cleanVal = rawVal.replace(/[^0-9]/g, '');

    // Handle full paste into a single input
    if (cleanVal.length > 1) {
      handlePastedDigits(cleanVal, index);
      return;
    }

    const nextOtp = [...value];
    nextOtp[index] = cleanVal ? cleanVal.slice(-1) : '';
    onChange(nextOtp);

    // Auto-focus next input if a digit was entered
    if (cleanVal && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePastedDigits = (pastedText, startIndex = 0) => {
    const cleanDigits = pastedText.replace(/[^0-9]/g, '').slice(0, length);
    if (!cleanDigits) return;

    const nextOtp = [...value];
    const digitsArr = cleanDigits.split('');
    digitsArr.forEach((char, i) => {
      if (startIndex + i < length) {
        nextOtp[startIndex + i] = char;
      }
    });

    onChange(nextOtp);

    // Focus the box immediately after the pasted content or the last box
    const nextIndex = Math.min(startIndex + digitsArr.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    handlePastedDigits(pastedData, 0);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        // Move back to previous input and clear it
        e.preventDefault();
        const nextOtp = [...value];
        nextOtp[index - 1] = '';
        onChange(nextOtp);
        inputRefs.current[index - 1]?.focus();
      } else if (value[index]) {
        // Clear current input
        e.preventDefault();
        const nextOtp = [...value];
        nextOtp[index] = '';
        onChange(nextOtp);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div
      className={`otp-container ${className}`}
      onPaste={handlePaste}
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        margin: '1rem 0'
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          autoComplete="one-time-code"
          aria-label={`Digit ${index + 1} of verification code`}
          className="otp-input"
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          disabled={disabled}
          style={{
            width: '46px',
            height: '52px',
            textAlign: 'center',
            fontSize: '1.4rem',
            fontWeight: '700',
            color: 'var(--dark-navy)',
            backgroundColor: disabled ? 'var(--pale-blue)' : 'var(--white)',
            border: hasError
              ? '2px solid var(--error-red)'
              : value[index]
                ? '2px solid var(--primary-blue)'
                : '1.5px solid var(--input-border)',
            borderRadius: '10px',
            outline: 'none',
            boxShadow: value[index] ? '0 2px 8px rgba(20, 99, 243, 0.12)' : 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s, background-color 0.2s'
          }}
        />
      ))}
    </div>
  );
}
