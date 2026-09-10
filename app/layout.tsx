import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박건우 소개 페이지",
  description: "박건우의 소개, 프로젝트, 관심사, 링크",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
