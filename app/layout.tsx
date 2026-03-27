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
  title: "GYMTEAM",
  description:
    "GYMTEAM is a premium fitness gym offering expert coaching, flexible schedules, and top-tier equipment. Start your journey today.",
  keywords: "gym, fitness, coaching, training, gymteam, powerlifting, crossfit, cardio, personal training",
  robots: "index, follow",
  openGraph: {
    title: "GYMTEAM — Work With Professionals",
    description: "Premium fitness gym with expert coaching and top-tier equipment.",
    type: "website",
    locale: "en_US",
    siteName: "GYMTEAM",
  },
  twitter: {
    card: "summary_large_image",
    title: "GYMTEAM — Work With Professionals",
    description: "Premium fitness gym with expert coaching and top-tier equipment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${poppins.variable} ${modica.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EB719ZV9Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2EB719ZV9Z');
            `,
          }}
        />
      </head>
      <body className="font-body min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
