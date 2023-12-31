import type { Metadata } from 'next';
import './globals.css';
import { AppStateProvider } from './StateContext';

export const metadata: Metadata = {
  title: 'Christian Winkler',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base">
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
