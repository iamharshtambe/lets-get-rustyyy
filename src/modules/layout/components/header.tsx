import { Unplug } from 'lucide-react';
import { User } from '../types';
import SearchBar from './search-bar';
import UserButton from '@/modules/authentication/components/user-button';
import Workspace from './workspace';

type Props = {
  user: User;
};

export default function Header({ user }: Props) {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-hidden overflow-x-auto border p-2">
      <div className="col-span-2 ml-4 flex items-center justify-between space-x-2">
        <Unplug size={28} className="text-cyan-500 hover:cursor-pointer" />
      </div>

      <div className="col-span-1 flex items-center justify-between space-x-2">
        <div
          className="border-animation relative flex flex-1 items-center justify-center self-stretch overflow-hidden rounded p-[1px]"
          aria-hidden="true"
        >
          <SearchBar />
        </div>
      </div>

      <div className="col-span-2 flex items-center justify-end space-x-2">
        <Workspace />
        <UserButton user={user} size="sm" />
      </div>
    </header>
  );
}
