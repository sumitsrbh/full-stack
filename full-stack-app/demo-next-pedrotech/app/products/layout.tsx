export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <h2>Products Section</h2>
      </header>

      {children}
    </section>
  );
}