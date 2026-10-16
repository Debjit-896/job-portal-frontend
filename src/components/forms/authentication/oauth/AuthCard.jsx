import { Link, useLocation } from 'react-router-dom';

export default function AuthCard({ children }) {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <>
      <div className="self-end text-right text-sm text-[#627BAF] mb-4 w-full max-w-[440px] mt-auto">
        {isLogin ? (
          <span>Don&apos;t have an account? <Link to="/signup" className="text-[#1463F3] hover:underline font-semibold ml-1">Sign Up</Link></span>
        ) : (
          <span>Already have an account? <Link to="/login" className="text-[#1463F3] hover:underline font-semibold ml-1">Log In</Link></span>
        )}
      </div>

      <div className="w-full max-w-[440px] flex flex-col mb-auto">
        <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#E2E8F0] p-6 md:p-10 w-full">
          {children}
        </div>
      </div>
    </>
  );
}
