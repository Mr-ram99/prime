import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prime",
  description: "Next Generation Shopping Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Home>{children}</Home>
      </body>
    </html>
  );
}
