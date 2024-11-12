import '@/app/ui/global.css';
import { inter } from './ui/fonts';


type NewType = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: NewType) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
