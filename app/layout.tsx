import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const modica = localFont({
  src: [
    {
      path: "../public/fonts/Modica.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Modica-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Modica-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Modica-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-modica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymTeam — Work With Professionals",
  description:
    "GymTeam is a premium fitness gym offering expert coaching, flexible schedules, and top-tier equipment. Start your journey today.",
  keywords: "gym, fitness, coaching, training, gymteam",
  openGraph: {
    title: "GymTeam — Work With Professionals",
    description: "Premium fitness gym with expert coaching and top-tier equipment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${poppins.variable} ${modica.variable}`}>
      <body className="font-body min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
