import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
