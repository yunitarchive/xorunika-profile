"use client";
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '@/components/Footer';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Xorunika</title>
      </head>
      <body> 
        <Header bgColor="bg-primary" /> 
      {children}
      <Footer />
      </body>
    </html>
 
  );
  
}
