import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Footer from "@/components/own/footer";
import Navigation from "@/components/own/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ferry Ananda Febian",
  description: "Portfolio Ferry Ananda Febian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen items-center md:mx-72 mx-4 gap-12`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
