import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"], // Include the Latin subset
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Random Password Generator",
  description: "Create strong and secure passwords to keep your account safe online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
