

export default function SocialAuthButtons() {
  return (
    <div className="social-buttons">
      <button className="btn-social" type="button" onClick={() => alert('Google OAuth integration pending')}>
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
        Continue with Google
      </button>
      <button className="btn-social" type="button" onClick={() => alert('GitHub OAuth integration pending')}>
        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
        Continue with GitHub
      </button>
      <button className="btn-social" type="button" onClick={() => alert('LinkedIn OAuth integration pending')}>
        <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="LinkedIn" />
        Continue with LinkedIn
      </button>
    </div>
  );
}
