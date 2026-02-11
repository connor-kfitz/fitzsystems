"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useEffect } from "react";

type ErrorModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
}

export default function ErrorModal({ open, title = "Error", message = "An error occurred.", onClose }: ErrorModalProps) {

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);
  
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose}/>
      <div className={cn("relative w-full max-w-lg p-6")}>
        <Card>
          <div className="px-6 py-4">
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <div className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{message}</div>
            </CardDescription>
          </div>
          <CardFooter className="justify-end">
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
