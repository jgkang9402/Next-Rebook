import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Rebook",
  description: "우리들의 독서 커뮤니티!",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Header />
          <div className="min-h-[72vh] mx-[10%]">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
