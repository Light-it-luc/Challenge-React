import Image from "next/image";
import { manrope } from "./fonts";
import "./globals.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className="h-full w-full" lang="en">
      <body
        className={`flex flex-row h-full w-full bg-custom-red text-custom-gray ${manrope.className}`}
      >
        <Image
          src="/RegisterIllustration.png"
          alt=""
          width={872}
          height={900}
          className="hidden sm:block flex-2 h-full object-cover"
        />
        <main className="flex flex-col flex-1 min-w-[390px] p-16 gap-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
