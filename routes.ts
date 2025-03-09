/**
 * An array of routes that is accessible to the public.
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * An array of routes used for authentication
 * These route will redirect logged users to /settings
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * @type {string[]}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
