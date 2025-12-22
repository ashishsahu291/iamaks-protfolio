import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iamaks portfolio studio",
  description: "iamaks portfolio studio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
