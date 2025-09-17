export default function ShipmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}
