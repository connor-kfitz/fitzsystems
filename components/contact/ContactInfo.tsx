import MeetingScheduleButton from "./MeetingScheduleButton";

import { email } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div>

      {/* Contact Information Header */}
      <h2 className="text-2xl font-bold text-foreground">
        {"Let's work together"}
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Whether you have a detailed spec or just a rough idea, we are
        happy to discuss how we can help. Every project starts with a
        conversation.
      </p>

      <div className="mt-10 flex flex-col gap-6">

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Email
            </p>
            <p className="text-sm text-muted-foreground">
              {email}
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start gap-4">
          <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Response Time
            </p>
            <p className="text-sm text-muted-foreground">
              Within 24 hours
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="rounded-md border border-border bg-secondary p-2.5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Location
            </p>
            <p className="text-sm text-muted-foreground">
              Remote - Based in Toronto, Ontario
            </p>
          </div>
        </div>
      </div>

      <MeetingScheduleButton/>

    </div>
  );
}
