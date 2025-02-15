import "../globals.css";
import { Inter, Noto_Serif, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import MainAppNavbar from "@/src/_components/navbar/appnavbar/MainAppNavbar";
import HomePageLayout from "@/src/_components/home/layout/HomePageLayout";
import MainFooter from "@/src/_components/footer/MainFooter";
import AuthContextProvider from "@/src/_contextApi/authContext";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import { getSession } from "../lib/authentication";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { featuredTagsListAction } from "../utils/tagActions";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import GoogleOneTap from "@/src/_components/googleAuth/GoogleOneTap";

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

export default async function homeLayout({ children }) {
  const userDetails = await getSession();
  const featuredTags = await featuredTagsListAction();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${poppins.variable}`}
      >
        <AuthContextProvider authData={userDetails}>
          <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
            <AppContextProvider>
              <ModelContextProvider>
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
                  {typeof userDetails !== "undefined" && !userDetails && (
                    <GoogleOneTap />
                  )}
                </div>
                <div className="layout_children_wrapper">
                  <HomePageLayout featuredTags={featuredTags}>
                    {children}
                  </HomePageLayout>
                </div>
                <div>
                  <MainFooter authData={userDetails} />
                </div>
              </ModelContextProvider>
            </AppContextProvider>
          </GoogleOAuthProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
