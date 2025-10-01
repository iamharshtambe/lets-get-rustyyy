'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { KeyRound, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Loading from '../loading';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      // Check if sign-in was successful
      if (result.error) {
        setError(result.error.message || 'Sign in failed');
        return;
      }

      // Only redirect if there's no error and we have a valid session
      if (result.data) {
        router.push('/');
      } else {
        setError('Sign in failed. Please check your credentials.');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleSocialAuth() {
    setError('');
    setSocialLoading(true);

    try {
      const result = await authClient.signIn.social({ provider: 'google' });

      // Check for errors
      if (result.error) {
        setError(result.error.message || 'Social sign in failed');
      }
      // For social auth, the redirect usually happens automatically
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setSocialLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to continue to Dev-Courrier
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Mail className="text-gray-400" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="Email"
            disabled={loading}
            required
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <KeyRound className="text-gray-400" size={18} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
            disabled={loading}
            required
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="flex w-full items-center justify-center gap-2 font-semibold"
          disabled={loading}
        >
          {loading ? (
            <>
              <span>
                <Loading />
              </span>
              <span>Signing in...</span>
            </>
          ) : (
            'Sign In'
          )}
        </Button>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-gray-200"></div>
          <span className="absolute bg-white px-2 text-xs text-gray-500">
            OR
          </span>
        </div>

        {/* Google Button */}
        <Button
          type="button"
          onClick={handleSocialAuth}
          className="w-full gap-2 font-semibold"
          disabled={socialLoading}
        >
          {socialLoading ? (
            <>
              <Loading />
              <span>Redirecting...</span>
            </>
          ) : (
            <>
              <Image
                src="/google-logo.png"
                alt="google-logo"
                width={20}
                height={20}
              />
              Continue with Google
            </>
          )}
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link
            href="/sign-up"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
