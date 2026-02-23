import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeEvoque | Your Vision, Our Code",
  description: "Premium software engineering and custom AI solutions designed to scale your business.",
  icons: {
    icon: "/E.png",         // Standard favicon
    shortcut: "/E.png",    // Shortcut icon for bookmarked tabs
    apple: "/E.png",       // Icon for iPhone/iPad home screens
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0c] text-white min-h-screen flex flex-col`}
      >
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area 
            'flex-grow' ensures the main content pushes the footer down 
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}