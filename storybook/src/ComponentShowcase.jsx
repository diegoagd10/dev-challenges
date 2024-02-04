export function ComponentShowcase({ title, children }) {
  return (
    <section className="sb-component-showcase">
      <header>
        <h1 className="sb-component-showcase-header">{title}</h1>
      </header>
      <section>{children}</section>
    </section>
  );
}
