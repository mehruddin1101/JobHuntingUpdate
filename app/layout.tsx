import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Huntings",
  description: "job huting for Freshers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <p style={{ textAlign: "center", color: "red", fontSize: "1.6rem" }}>
            <a
              target="_blank"
              href="https://techfynder.com/Fresher-jobs-in-India"
            >
             
              <h1>
               
                Top mncs are Hiring{" "}
                <b style={{ marginLeft: "20px" }}>
                
                  find the Fresheres job in india
                </b>
              </h1>
            </a>
          </p>

      </head>
      <body className={inter.className}>
        <Header /> 
        <main>{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}
