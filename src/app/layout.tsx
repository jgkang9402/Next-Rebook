import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rebook",
  description: "우리들의 독서 커뮤니티!",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="min-h-[72vh] mx-[10%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
