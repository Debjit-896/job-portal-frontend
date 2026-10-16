import BrandingPanel from '../BrandingPanel';

export default function AuthPage({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-white">
      <BrandingPanel />
      <div className="min-w-0 min-h-0 bg-white px-[4vw] py-8 flex flex-col items-center justify-start overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
