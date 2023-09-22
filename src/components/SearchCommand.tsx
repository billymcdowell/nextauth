"use client";

import React, { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import useKeyboardShortcut from "use-keyboard-shortcut";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  const { flushHeldKeys } = useKeyboardShortcut(
    ["Meta", "/"],
    (shortcutKeys) => setOpen(!open),
    {
      overrideSystem: true,
      ignoreInputFields: false,
      repeatOnHold: false,
    }
  );

  return (
    <>
      {/* <Button onClick={() => setOpen(!open)}>Search</Button> */}
      <div className="w-full flex-1 md:w-auto md:flex-none">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:inline-flex">Search...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⇧</span>/
          </kbd>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
