"use client";

import { calendlyUrl } from "@/lib/constants";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function MeetingScheduleButton() {

  const [open, setOpen] = useState(false);

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

  const rootElement =
    typeof document !== "undefined"
      ? document.documentElement
      : undefined;

  return (
    <>
      <div className = "mt-10 rounded-lg border border-border bg-secondary/30 p-6">
        <p className="text-sm font-semibold text-foreground">
          Prefer to talk?
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Schedule a free 30-minute consultation to discuss your
          project requirements.
        </p>
        <button
          type="button"
          className="cursor-pointer mt-4 inline-flex items-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          onClick={() => setOpen(true)}
        >
          Schedule a Call
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
      {rootElement
        ? <PopupModal
            url={calendlyUrl}
            onModalClose={() => setOpen(false)}
            open={open}
            rootElement={rootElement}
          /> 
        : null
      }
    </>
  );
}
