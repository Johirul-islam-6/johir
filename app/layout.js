import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { Navbar } from "@/Components/Navbar/Navbar";
import { Footer } from "@/Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "johir-khan",
  description: "Hi, This is my simple portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
