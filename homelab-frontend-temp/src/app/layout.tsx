export default function HomelabRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Homelab</title>
      <head></head>
      <body
        style={{
          backgroundColor: "#000000",
          color: "#c1c1c1",
          margin: 20,
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
