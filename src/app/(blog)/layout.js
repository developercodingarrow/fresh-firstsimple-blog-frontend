import { Inter, Noto_Serif, Poppins } from "next/font/google";
import AuthModel from "@/src/_components/models/AuthModel";
import "../globals.css";
import MainFooter from "@/src/_components/footer/MainFooter";
import MainAppNavbar from "@/src/_components/navbar/appnavbar/MainAppNavbar";
import AuthContextProvider from "@/src/_contextApi/authContext";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import ReportModel from "@/src/_components/models/ReportModel";
import { getSession } from "../lib/authentication";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { featuredTagsListAction } from "../utils/tagActions";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";
import GoogleOneTap from "@/src/_components/googleAuth/GoogleOneTap";
import CustomePageLoading from "@/src/_components/loading/CustomePageLoading";
import MobileAppDrawer from "@/src/_components/app_Drawer/MobileAppDrawer";

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

export default async function SingleblogLayout({ children }) {
  const userDetails = await getSession();
  const featuredTags = await featuredTagsListAction();
  return (
    <body
      className={`${inter.variable} ${notoSerif.variable} ${poppins.variable}`}
    >
      <AuthContextProvider authData={userDetails}>
        <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
          <AppContextProvider>
            <ModelContextProvider>
              <AuthModel />
              <ReportModel />
              <CustomePageLoading />
              <MobileAppDrawer />
              <div>
                <MainAppNavbar
                  authData={userDetails}
                  suggestList={featuredTags}
                />
                {!userDetails && <GoogleOneTap />}
              </div>
              <div className="single_blog_layout_children_wrapper">
                {children}
              </div>
              <div>
                <MainFooter authData={userDetails} />
              </div>
            </ModelContextProvider>
          </AppContextProvider>
        </GoogleOAuthProvider>
      </AuthContextProvider>
    </body>
  );
}
