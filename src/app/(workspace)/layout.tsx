import { getCurrentUser } from '@/modules/authentication/actions';
import Header from '@/modules/layout/components/header';

export default async function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      {/* @ts-ignore */}
      <Header user={currentUser} />

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel */}
        <div className="w-12 border-r border-zinc-800 bg-zinc-900">
          <p>TabbedLeftPanel</p>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto bg-zinc-950">{children}</div>
      </div>
    </div>
  );
}
