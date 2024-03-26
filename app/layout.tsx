import React from "react";
import { Inter } from "next/font/google";
import Sidebar from "./(components)/Sidebar";
import "./globals.css";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calendar",
  description: "Calendar app",
};

export default function RootLayout({ children } : { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Container sx={{display:"flex", flexDirection:"row", height:"100dvh"}} disableGutters> 
          <Sidebar/>
          {children}
      </Container> 
      </body>
    </html>
  );
}
