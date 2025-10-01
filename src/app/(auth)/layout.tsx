import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    return redirect('/');
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 items-center justify-center bg-white md:flex">
        <Image
          src="/auth-img.png"
          alt="API Testing Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="flex w-full items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
