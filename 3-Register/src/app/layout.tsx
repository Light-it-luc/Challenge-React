import { Manrope } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`flex flex-row h-full bg-custom-red text-custom-gray ${manrope.className}`}
      >
        <Image
          src="/RegisterIllustration.png"
          alt="Ilustration of user signing in"
          width={872}
          height={900}
          className="hidden sm:block h-full object-cover"
        />
        {children}
      </body>
    </html>
  );
}
