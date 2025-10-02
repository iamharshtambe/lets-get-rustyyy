import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export default function Workspace() {
  return (
    <Button className="bg--400/10 flex items-center space-x-1 border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-300">
      <User /> <span>Personal Workspace</span>
    </Button>
  );
}
