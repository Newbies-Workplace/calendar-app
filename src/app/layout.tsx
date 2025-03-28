import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {Providers} from "@/lib/providers";
import React from "react";
import {UserCreateForm} from "@/components/forms/userCreateForm";
import {getSession} from "@/lib/session";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Newbies Calendar',
  description: 'Newbies Calendar - aplikacja do szukania terminów na spotkania',
}

export default async function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
    <head>
      <script
        crossOrigin="anonymous"
        src="//unpkg.com/react-scan/dist/auto.global.js"
      />
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <Providers>
      {children}

      {!session && <UserCreateForm/>}

      <Toaster position={"top-center"} duration={1000}/>
    </Providers>
    </body>
    </html>
  );
}
