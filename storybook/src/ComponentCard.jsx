export function ComponentCard({ code, children }) {
  return (
    <article className="sb-component-card-container">
      <header>
        <span className="sb-component-card-code">{code}</span>
      </header>
      {children}
    </article>
  );
}
