interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          {label}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
