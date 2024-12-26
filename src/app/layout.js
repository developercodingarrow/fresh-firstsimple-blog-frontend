// src/app/layout.js
import "./globals.css"; // Optional: Add global styles

export const metadata = {
  title: "My App",
  description: "A great app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
