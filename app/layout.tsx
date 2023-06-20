import { Footer, Navbar } from "@/components";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../public/assets/fonts/Satoshi-Variable.woff2",
});

export const metadata = {
  title: "Ayush.",
  description: "Crafting designs that are both functional and beautiful",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.className} bg-zinc-900 text-zinc-50`}
        suppressHydrationWarning={true}
      >
        <div className="container mx-auto">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
