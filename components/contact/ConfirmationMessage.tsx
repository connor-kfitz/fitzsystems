
export default function ConfirmationMessage() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 p-3 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-foreground">
        Message sent
      </h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Thank you for reaching out. I will review your message and
        get back to you within 24 hours.
      </p>
    </div>
  );
}
