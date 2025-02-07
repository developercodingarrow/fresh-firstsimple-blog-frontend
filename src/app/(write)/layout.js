import { Inter, Noto_Serif, Poppins } from "next/font/google";
import ImgModelContextProvider from "@/src/_contextApi/ImgModelContextApi";
import "../globals.css";
import MainFooter from "@/src/_components/footer/MainFooter";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { verifiedTagsListAction } from "../utils/tagActions";
import TagContextProvider from "@/src/_contextApi/TagContextApi";
import CustomePageLoading from "@/src/_components/loading/CustomePageLoading";

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
                <CustomePageLoading />
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
