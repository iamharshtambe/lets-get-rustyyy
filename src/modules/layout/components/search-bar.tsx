'use client';

import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  // Handle keyboard shortcut
  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        setOpen((open) => !open);
      }
    }

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative flex flex-1 cursor-text items-center justify-between self-stretch overflow-hidden rounded bg-zinc-800 px-4 py-2 text-gray-500 transition hover:bg-zinc-800 hover:text-gray-200 focus-visible:bg-zinc-700 focus-visible:text-gray-200"
      >
        <span className="inline-flex flex-1 items-center">
          <Search size={16} className="mr-2" />
          <span className="text-left text-xs">Search</span>
        </span>
        <span className="flex space-x-1">
          <kbd className="rounded bg-zinc-700 px-1 py-0.5 text-xs">Ctrl</kbd>
          <kbd className="rounded bg-zinc-700 px-1 py-0.5 text-xs">K</kbd>
        </span>
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="border border-zinc-800 bg-zinc-900">
          <CommandInput
            placeholder="Type a command or search..."
            className="border-none bg-transparent text-gray-300 placeholder:text-gray-500"
          />
          <CommandList className="bg-zinc-900">
            <CommandEmpty className="py-6 text-center text-gray-500">
              No results found.
            </CommandEmpty>
            <CommandGroup>
              <CommandItem
                onSelect={() => setOpen(false)}
                className="text-gray-300 hover:bg-zinc-800"
              >
                <span>Pre-request Script</span>
              </CommandItem>
              <CommandItem
                onSelect={() => setOpen(false)}
                className="text-gray-300 hover:bg-zinc-800"
              >
                <span>Tests</span>
              </CommandItem>
              <CommandItem
                onSelect={() => setOpen(false)}
                className="text-gray-300 hover:bg-zinc-800"
              >
                <span>Variables</span>
              </CommandItem>
              <CommandItem
                onSelect={() => setOpen(false)}
                className="text-gray-300 hover:bg-zinc-800"
              >
                <span>Documentation</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>

          {/* Bottom navigation hints */}
          <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900 px-3 py-2">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-gray-400">
                  ↑
                </kbd>
                <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-gray-400">
                  ↓
                </kbd>
                <span>to navigate</span>
              </div>
              <div className="flex items-center space-x-1">
                <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-gray-400">
                  ↵
                </kbd>
                <span>to select</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-gray-400">
                ESC
              </kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}
