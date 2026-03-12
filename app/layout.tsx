import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRICEDIN — Everything Is Already Priced In",
  description: "Your fear. Your hope. Your existence. Already in the price.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }, { url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
