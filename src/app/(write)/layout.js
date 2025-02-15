import "../globals.css";
import { Inter, Noto_Serif, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import ImgModelContextProvider from "@/src/_contextApi/ImgModelContextApi";

import MainFooter from "@/src/_components/footer/MainFooter";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { verifiedTagsListAction } from "../utils/tagActions";
import TagContextProvider from "@/src/_contextApi/TagContextApi";

const ClientCustomePageLoading = dynamic(
  () => import("../../_components/loading/CustomePageLoading"),
  {
    ssr: false,
  }
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "LitVerseHub",
  description: "LitVerseHub – Your digital hub for writers and readers.",
};

export default async function WriteLayout({ children }) {
  const verifiedTags = await verifiedTagsListAction();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} ${poppins.variable}`}
    >
      <head />
      <body>
        <AppContextProvider>
          <TagContextProvider verifiedTags={verifiedTags}>
            <ModelContextProvider>
              <ImgModelContextProvider>
                <ClientCustomePageLoading />
                <div>{/* <MainAppNavbar /> */}</div>
                <div>{children}</div>
                <div>
                  <MainFooter />
                </div>
              </ImgModelContextProvider>
            </ModelContextProvider>
          </TagContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
