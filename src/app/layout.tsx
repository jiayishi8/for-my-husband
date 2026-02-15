import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "a little game for my darling husband!!",
  
  keywords: [
    
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
