import React from "react";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Weather App</title>
        <meta charSet="UTF-8" />
        <meta name="title" content="Weather app" />
        <meta name="description" content="Weather dashboard to see world's forecast data" />
        <meta name="keywords" content="weather, app, dashboard, forecast, temperature" />
        <meta name="author" content="Ignacio Rodriguez Rulas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="rating" content="safe for kids" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Weather app" />
        <meta property="og:description" content="Weather dhasboard to see world's forecast data" />
        <meta property="og:image" content="/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
