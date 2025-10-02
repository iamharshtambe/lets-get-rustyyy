'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { User, KeyRound, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Loading from './loading';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const result = await authClient.signUp.email({
        name,
        email,
        password,
      });

      // Check if sign-up was successful
      if (result.error) {
        setError(result.error.message || 'Sign up failed');
        return;
      }

      // Only redirect if there's no error and sign-up succeeded
      if (result.data) {
        router.push('/sign-in');
      } else {
        setError('Sign up failed. Please try again.');
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

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account ✨</h1>
          <p className="text-sm text-muted-foreground">
            Join Dev-Courrier and start managing your APIs with ease
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Name */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <User className="text-gray-400" size={18} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            minLength={2}
            disabled={loading}
            required
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Mail className="text-gray-400" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Password"
            minLength={8}
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
              <span className="flex items-center justify-center gap-2">
                Creating account...
              </span>
            </>
          ) : (
            'Sign Up'
          )}
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
