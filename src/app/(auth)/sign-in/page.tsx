import { Button } from '@/components/ui/button';
import { User, KeyRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <form className="w-full">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to continue to Dev-Courrier
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <User className="text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <KeyRound className="text-gray-400" size={18} />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Submit */}
        <Button className="w-full font-semibold">Sign In</Button>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-gray-200"></div>
          <span className="absolute bg-white px-2 text-xs text-gray-500">
            OR
          </span>
        </div>

        {/* Google Button */}
        <Button className="w-full gap-2 font-semibold">
          <Image
            src="/google-logo.png"
            alt="google-logo"
            width={20}
            height={20}
          />
          Continue with Google
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
