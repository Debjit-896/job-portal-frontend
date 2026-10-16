import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    if (autoFocus && inputRefs.current[0] && !disabled) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus, disabled]);

  const handleChange = (index, e) => {
    const rawVal = e.target.value;
    const cleanVal = rawVal.replace(/[^0-9]/g, '');

    if (cleanVal.length > 1) {
      handlePastedDigits(cleanVal, index);
      return;
    }

    const nextOtp = [...value];
    nextOtp[index] = cleanVal ? cleanVal.slice(-1) : '';
    onChange(nextOtp);

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
        e.preventDefault();
        const nextOtp = [...value];
        nextOtp[index - 1] = '';
        onChange(nextOtp);
        inputRefs.current[index - 1]?.focus();
      } else if (value[index]) {
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
      className={`flex justify-center gap-2.5 my-4 ${className}`}
      onPaste={handlePaste}
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
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          disabled={disabled}
          className={`w-[46px] h-[52px] text-center text-2xl font-bold rounded-[10px] outline-none transition-all duration-200 ${
            disabled ? 'bg-[#F4F8FF] text-gray-400' : 'bg-white text-[#102E6D]'
          } ${
            hasError
              ? 'border-2 border-[#E11D48]'
              : value[index]
              ? 'border-2 border-[#1463F3] shadow-[0_2px_8px_rgba(20,99,243,0.12)]'
              : 'border-[1.5px] border-[#D8E6FF] focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15'
          }`}
        />
      ))}
    </div>
  );
}
