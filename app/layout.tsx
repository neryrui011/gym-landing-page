import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
