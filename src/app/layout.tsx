import './globals.css';
import Header from '../components/Header';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Xorunika</title>
      </head>
      <body> 
        <Header bgColor="bg-primary" /> 
      {children}
      </body>
    </html>
  );
}
