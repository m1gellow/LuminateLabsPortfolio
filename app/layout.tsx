import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import MyWorks from "./components/Shared/MyWorks";
import Head from "next/head";

const roboto = Roboto({
  variable: "--font-robot",
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title:{
    default: "Luminate Labs",
    template: "%s - Luminate Labs"
  },
  description: "Building web blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="EObO9EN98MC7TntRPHorF5mfeh9aRE6-OoRVUB7VQ8I" />
      </Head>
      <body className={`${roboto.variable} antialiased`} >
          <div className="flex justify-center">
            <Navbar />
          </div>
          <div>
             {children}
             <MyWorks/>
          </div>

      </body>
    </html>
  );
}
