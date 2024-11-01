import Head from "next/head";

export const metadata = {
  title: "Alex Hobden",
  description: "Generated by Next.js",
  icons: {
    icon: "/icons/yellowicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
