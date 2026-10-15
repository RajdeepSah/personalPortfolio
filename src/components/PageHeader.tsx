import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/** Page title block. Renders the page's single <h1>. */
const PageHeader = ({ eyebrow, title, children }: PageHeaderProps) => (
  <header className="text-center animate-fade-up">
    <p className="section-eyebrow mb-3">{eyebrow}</p>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
      {title}
    </h1>
    {children && (
      <div className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
        {children}
      </div>
    )}
  </header>
);

export default PageHeader;
