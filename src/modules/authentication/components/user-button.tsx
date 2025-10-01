'use client';

import { useState } from 'react';
import { LogOut, Settings, CreditCard, User as UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

// Type definition for the user data passed to this component
type UserData = {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// Props for the UserButton component
type UserButtonProps = {
  user: UserData | null; // The current logged-in user, null if not logged in
  onSettings?: () => void; // Optional callback for settings click
  onProfile?: () => void; // Optional callback for profile click
  onBilling?: () => void; // Optional callback for billing click
  showBadge?: boolean; // Whether to show a badge (like "Pro")
  badgeText?: string; // Text to display inside the badge
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline'; // Badge style
  size?: 'sm' | 'md' | 'lg'; // Avatar size
  showEmail?: boolean; // Whether to show email in dropdown
  showMemberSince?: boolean; // Whether to show "Member since ..." info
};

export default function UserButton({
  user,
  onSettings,
  onProfile,
  onBilling,
  showBadge = false,
  badgeText = 'Pro',
  badgeVariant = 'default',
  size = 'md',
  showEmail = true,
  showMemberSince = true,
}: UserButtonProps) {
  const [isLoading, setIsLoading] = useState(false); // Loading state for logout
  const router = useRouter();

  // Internal sign out logic using authClient
  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in'); // Redirect to sign-in page after logout
        },
      },
    });
  };

  // Handler for logout menu item
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await onSignOut();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate initials for avatar fallback if image is missing
  const getUserInitials = (name: string | null, email: string | null) => {
    if (name) {
      // Take first letters of first two words in the name
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      // Use first two letters of email if name is missing
      return email.slice(0, 2).toUpperCase();
    }
    return 'U'; // Default fallback
  };

  // Format date to "Month Year" for member since info
  const formatMemberSince = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  };

  // Mapping for avatar sizes
  const avatarSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  // If no user is passed, do not render anything
  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      {/* Trigger for dropdown menu (avatar button) */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`relative ${avatarSizes[size]} rounded-full p-0 hover:bg-accent`}
          disabled={isLoading} // Disable while logging out
        >
          <Avatar className={avatarSizes[size]}>
            <AvatarImage
              src={user.image || ''} // Show user image if available
              alt={user.name || 'User avatar'}
            />
            <AvatarFallback className="bg-primary font-bold text-primary-foreground">
              {getUserInitials(user.name, user.email)}{' '}
              {/* Show initials if no image */}
            </AvatarFallback>
          </Avatar>
          {showBadge && (
            <Badge
              variant={badgeVariant}
              className="absolute -right-1 -bottom-1 h-5 px-1 text-xs"
            >
              {badgeText} {/* Show badge on avatar */}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown menu content */}
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              {/* Avatar in dropdown */}
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={user.image || ''}
                  alt={user.name || 'User avatar'}
                />
                <AvatarFallback className="bg-primary text-lg font-bold text-primary-foreground">
                  {getUserInitials(user.name, user.email)}
                </AvatarFallback>
              </Avatar>
              {/* User name, email, badge */}
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">
                  {user.name || 'User'}
                </p>
                {showEmail && user.email && (
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                )}
                {showBadge && (
                  <Badge variant={badgeVariant} className="w-fit">
                    {badgeText}
                  </Badge>
                )}
              </div>
            </div>
            {showMemberSince && (
              <p className="text-xs text-muted-foreground">
                Member since {formatMemberSince(user.createdAt)}
              </p>
            )}
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Optional dropdown menu items */}
        {onProfile && (
          <DropdownMenuItem onClick={onProfile} className="cursor-pointer">
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
        )}

        {onBilling && (
          <DropdownMenuItem onClick={onBilling} className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>
        )}

        {onSettings && (
          <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />

        {/* Logout item */}
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoading}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {isLoading ? 'Logging out...' : 'Log out'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
