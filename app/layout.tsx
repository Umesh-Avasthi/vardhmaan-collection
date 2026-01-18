import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "Next.js Landing Page with Search"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
