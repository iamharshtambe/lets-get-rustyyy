import { Button } from '@/components/ui/button';
import { User, KeyRound, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <form className="w-full">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account ✨</h1>
          <p className="text-sm text-muted-foreground">
            Join Dev-Courrier and start managing your APIs with ease
          </p>
        </div>

        {/* Name */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <User className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Full Name"
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 rounded-lg border px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <Mail className="text-gray-400" size={18} />
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
        <Button className="w-full font-semibold">Sign Up</Button>

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
