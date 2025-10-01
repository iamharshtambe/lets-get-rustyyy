import { getCurrentUser } from '@/modules/authentication/actions';
import UserButton from '@/modules/authentication/components/user-button';

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <UserButton user={currentUser} />
    </div>
  );
}
