import { apiClient } from './apiClient';

/**
 * Centralized Authentication API service layer.
 * Communicates with Spring Boot User Service (/api/v1/auth).
 */
export const authApi = {
  /**
   * Register a new user.
   * Backend DTO: SignupRequest { name, email, password, phone?, role? }
   */
  async register(payload) {
    const { name, email, password, phone, role } = payload;
    const body = {
      name: name?.trim(),
      email: email?.trim()?.toLowerCase(),
      password,
      ...(phone ? { phone: phone.trim() } : {}),
      ...(role ? { role } : {}),
    };
    const response = await apiClient.post('/api/v1/auth/register', body);
    return response.data;
  },

  /**
   * Login with email and password.
   * Backend DTO: LoginRequest { email, password }
   * Response: AuthResponse { jwt, refreshToken, userResponse }
   */
  async login(credentials) {
    const { email, password } = credentials;
    const response = await apiClient.post('/api/v1/auth/login', {
      email: email?.trim()?.toLowerCase(),
      password,
    });
    return response.data;
  },

  /**
   * Send 6-digit email verification OTP.
   * Backend DTO: EmailVerificationRequest { email }
   */
  async sendEmailVerification(email) {
    const response = await apiClient.post('/api/v1/auth/email-verification/send', {
      email: email?.trim()?.toLowerCase(),
    });
    return response.data;
  },

  /**
   * Confirm email verification using OTP or token.
   * Backend DTO: ConfirmEmailRequest { email?, otp?, token? }
   */
  async confirmEmail({ email, otp, token }) {
    const body = {};
    if (email) body.email = email.trim().toLowerCase();
    if (otp) body.otp = String(otp).trim();
    if (token) body.token = String(token).trim();
    const response = await apiClient.post('/api/v1/auth/email-verification/confirm', body);
    return response.data;
  },

  /**
   * Request password reset OTP.
   * Backend DTO: ForgotPasswordRequest { email }
   */
  async forgotPassword(email) {
    const response = await apiClient.post('/api/v1/auth/forgot-password', {
      email: email?.trim()?.toLowerCase(),
    });
    return response.data;
  },

  /**
   * Verify the 6-digit reset OTP and obtain a one-time resetToken.
   * Backend DTO: VerifyResetOtpRequest { email, otp }
   * Response: VerifyResetOtpResponse { resetToken, message }
   */
  async verifyResetOtp({ email, otp }) {
    const response = await apiClient.post('/api/v1/auth/forgot-password/verify', {
      email: email?.trim()?.toLowerCase(),
      otp: String(otp).trim(),
    });
    return response.data;
  },

  /**
   * Reset password using resetToken or direct email+otp.
   * Backend DTO: ResetPasswordRequest { token?, newPassword, email?, otp? }
   */
  async resetPassword({ token, newPassword, email, otp }) {
    const body = { newPassword };
    if (token) body.token = token;
    if (email) body.email = email.trim().toLowerCase();
    if (otp) body.otp = String(otp).trim();
    const response = await apiClient.post('/api/v1/auth/reset-password', body);
    return response.data;
  },

  /**
   * Change password for logged-in user.
   * Requires Bearer token in header.
   */
  async changePassword({ currentPassword, newPassword, confirmPassword }) {
    const response = await apiClient.post('/api/v1/auth/change-password', {
      currentPassword,
      newPassword,
      confirmPassword,
    });
    return response.data;
  },

  /**
   * Get currently authenticated user's profile and basic info.
   * Requires Bearer token in header.
   */
  async getCurrentUser() {
    const response = await apiClient.get('/api/v1/auth/me');
    return response.data;
  },

  /**
   * Refresh access token using refresh token.
   * Backend DTO: RefreshTokenRequest { refreshToken }
   */
  async refreshTokens(refreshToken) {
    const response = await apiClient.post('/api/v1/auth/refresh', { refreshToken });
    return response.data;
  },

  /**
   * Invalidate current device's refresh token.
   * Backend DTO: LogoutRequest { refreshToken }
   */
  async logout(refreshToken) {
    const response = await apiClient.post('/api/v1/auth/logout', { refreshToken });
    return response.data;
  },

  /**
   * Invalidate all refresh tokens for user (logout everywhere).
   * Requires Bearer token in header.
   */
  async logoutAll() {
    const response = await apiClient.post('/api/v1/auth/logout-all');
    return response.data;
  },

  /**
   * Generic OAuth login.
   */
  async oauthLogin(data) {
    const response = await apiClient.post('/api/v1/auth/oauth-login', data);
    return response.data;
  },

  /**
   * Google OAuth login with Google ID token.
   */
  async googleLogin(idToken) {
    const response = await apiClient.post('/api/v1/auth/google-login', { idToken });
    return response.data;
  },

  /**
   * GitHub OAuth login with GitHub token.
   */
  async githubLogin(token) {
    const response = await apiClient.post('/api/v1/auth/github-login', { token });
    return response.data;
  },

  /**
   * Link an OAuth provider to existing authenticated user account.
   */
  async linkOAuth(data) {
    const response = await apiClient.post('/api/v1/auth/link-oauth', data);
    return response.data;
  },

  /**
   * List all linked OAuth providers for current user.
   */
  async getLinkedOAuthAccounts() {
    const response = await apiClient.get('/api/v1/auth/oauth/accounts');
    return response.data;
  },

  /**
   * Unlink an OAuth provider from account.
   */
  async unlinkOAuthAccount(provider) {
    const response = await apiClient.delete(`/api/v1/auth/oauth/accounts/${provider}`);
    return response.data;
  },
};
