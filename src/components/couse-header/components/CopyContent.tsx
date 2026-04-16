"use client";

import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface ICopyContentProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

export const CopyContent = ({
  title,
  content,
  children,
}: ICopyContentProps) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    window.navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger asChild>{children}</DropDownMenu.Trigger>
      <DropDownMenu.Portal>
        <DropDownMenu.Content className="flex flex-col gap-2 rounded-lg border border-primary bg-paper p-2 min-w-72 max-w-sm">
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <input
              value={content}
              readOnly
              autoFocus
              onFocus={(e) => e.target.select()}
              className="bg-background rounded p-1 px-2 w-full"
            />
            <button className="p-2 hover:cursor-pointer" onClick={handleCopy}>
              {copied ? (
                <MdCheck className="text-primary" />
              ) : (
                <MdContentCopy />
              )}
            </button>
          </div>
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
};
