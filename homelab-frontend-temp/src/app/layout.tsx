export default function HomelabRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Homelab</title>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
