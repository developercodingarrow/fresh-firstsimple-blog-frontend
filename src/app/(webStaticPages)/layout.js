import "../globals.css";
import { Inter, Noto_Serif, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import MainFooter from "@/src/_components/footer/MainFooter";
import MainAppNavbar from "@/src/_components/navbar/appnavbar/MainAppNavbar";
import AppContextProvider from "@/src/_contextApi/AppContext";
import AuthContextProvider from "@/src/_contextApi/authContext";
import ImgModelContextProvider from "@/src/_contextApi/ImgModelContextApi";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import { getSession } from "../lib/authentication";
import InputModelContextProvider from "@/src/_contextApi/InputModelContextApi";
import { featuredTagsListAction } from "../utils/tagActions";

import WebStaticPageLayout from "@/src/_components/web_static/WebStaticPageLayout";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import { GoogleOAuthProvider } from "@react-oauth/google";

const ClientCustomePageLoading = dynamic(
  () => import("../../_components/loading/CustomePageLoading"),
  {
    ssr: false,
  }
);
const ClientReportModel = dynamic(
  () => import("../../_components/models/ReportModel"),
  {
    ssr: false,
  }
);

const ClientAuthModel = dynamic(
  () => import("../../_components/models/AuthModel"),
  {
    ssr: false,
  }
);

const ClientMobileAppDrawer = dynamic(
  () => import("../../_components/app_Drawer/MobileAppDrawer"),
  {
    ssr: false,
  }
);

const ClientMobileSearchModel = dynamic(
  () => import("../../_components/models/MobileSearchModel"),
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

export default async function StaticLayout({ children }) {
  const userDetails = await getSession();
  const featuredTags = await featuredTagsListAction();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} ${poppins.variable}`}
    >
      <head />
      <body>
        <AuthContextProvider authData={userDetails}>
          <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
            <AppContextProvider>
              <InputModelContextProvider>
                <ModelContextProvider>
                  <ImgModelContextProvider>
                    <ClientCustomePageLoading />
                    <ClientMobileAppDrawer />
                    <ClientAuthModel />
                    <ClientReportModel />
                    <ClientMobileSearchModel suggestList={featuredTags} />
                    <div>
                      <MainAppNavbar
                        authData={userDetails}
                        suggestList={featuredTags}
                      />
                    </div>
                    <div className="static_layout_children_wrapper">
                      <WebStaticPageLayout>{children}</WebStaticPageLayout>
                    </div>
                    <div>
                      <MainFooter authData={userDetails} />
                    </div>
                  </ImgModelContextProvider>
                </ModelContextProvider>
              </InputModelContextProvider>
            </AppContextProvider>
          </GoogleOAuthProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
