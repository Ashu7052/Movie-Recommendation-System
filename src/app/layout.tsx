import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CinemaX | Premium Movie Experience',
  description: 'A beautiful Movie Recommendation system inspired by premium designs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
