import Footer from "./ui/footer";
import Header from "./ui/header";

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
      <body>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
