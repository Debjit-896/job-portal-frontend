import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { tokenStorage } from '../../../../utils/tokenStorage';
import { authApi } from '../../../../services/api/authApi';
import { useAuth } from '../../../../hooks/useAuth';
import { useToast } from '../../../common/toast';
import { getDashboardPathForRole } from '../../../../utils/navigation';
import { Loader2 } from 'lucide-react';

export default function OAuth2RedirectHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { setAuthSession } = useAuth();
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;

    const token = searchParams.get('token') || searchParams.get('jwt');
    const refreshToken = searchParams.get('refreshToken');
    const error = searchParams.get('error');

    // Clean URL query params from browser history to minimize token exposure
    window.history.replaceState({}, document.title, window.location.pathname);

    if (error) {
      toast.error(decodeURIComponent(error), 'Authentication Failed');
      navigate('/login', { replace: true });
      return;
    }

    if (!token) {
      toast.error('No authentication token received from identity provider.', 'Login Failed');
      navigate('/login', { replace: true });
      return;
    }

    const processLogin = async () => {
      try {
        tokenStorage.setAccessToken(token);
        if (refreshToken) {
          tokenStorage.setRefreshToken(refreshToken);
        }

        // Fetch current user details with newly stored token
        const user = await authApi.getCurrentUser();
        if (setAuthSession) {
          setAuthSession({ jwt: token, refreshToken }, user);
        } else {
          tokenStorage.setUser(user);
        }

        toast.success(`Welcome back, ${user?.name || user?.email || 'User'}!`, 'Logged In');
        navigate(getDashboardPathForRole(user?.role), { replace: true });
      } catch (err) {
        console.error('Failed to resolve authenticated user after OAuth2 redirect:', err);
        // Still attempt redirect to dashboard if token exists
        navigate('/login', { replace: true });
      }
    };

    processLogin();
  }, [searchParams, navigate, toast, setAuthSession]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4F7FC]">
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(16,46,109,0.08)] flex flex-col items-center max-w-sm w-full mx-4 text-center">
        <Loader2 className="w-10 h-10 text-[#1463F3] animate-spin mb-4" />
        <h3 className="text-lg font-bold text-[#102E6D] mb-1">Authenticating...</h3>
        <p className="text-sm text-[#627BAF]">Completing your secure sign-in, please wait.</p>
      </div>
    </div>
  );
}
