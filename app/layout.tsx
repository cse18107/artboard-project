import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans(
  {
    subsets: ["latin"],
    variable: '--font--work-sans',
    weight: ['400', '600', '700']
  },
);

export const metadata: Metadata = {
  title: "Artboard",
  description: "Collaborate | Create | Design | Build | Share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${workSans.className} bg-primary-grey-200`}> */}
      <body className={`${workSans.className} bg-[#222831]`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
