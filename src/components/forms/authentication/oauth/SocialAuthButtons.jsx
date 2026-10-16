export default function SocialAuthButtons() {
  return (
    <div className="flex flex-col gap-2.5 my-4 w-full">
      <button
        className="flex items-center justify-center gap-3 w-full py-2.5 px-4 bg-white border border-[#D8E6FF] rounded-lg text-sm font-semibold text-[#102E6D] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        type="button"
        onClick={() => alert('Google OAuth integration pending')}
      >
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>
      <button
        className="flex items-center justify-center gap-3 w-full py-2.5 px-4 bg-white border border-[#D8E6FF] rounded-lg text-sm font-semibold text-[#102E6D] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        type="button"
        onClick={() => alert('GitHub OAuth integration pending')}
      >
        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
        Continue with GitHub
      </button>
      <button
        className="flex items-center justify-center gap-3 w-full py-2.5 px-4 bg-white border border-[#D8E6FF] rounded-lg text-sm font-semibold text-[#102E6D] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        type="button"
        onClick={() => alert('LinkedIn OAuth integration pending')}
      >
        <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="LinkedIn" className="w-5 h-5" />
        Continue with LinkedIn
      </button>
    </div>
  );
}
