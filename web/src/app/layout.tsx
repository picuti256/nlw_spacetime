import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-robot" });
const baiJamjure = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-baijamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma capsula do tempo fullstack utilizando Next.JS e Node",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjure.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
