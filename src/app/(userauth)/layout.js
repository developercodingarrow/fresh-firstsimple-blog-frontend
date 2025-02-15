import "../globals.css";
import { Inter, Noto_Serif, Poppins } from "next/font/google";

import MainFooter from "@/src/_components/footer/MainFooter";
import AuthContextProvider from "@/src/_contextApi/authContext";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";
import AuthNavbar from "@/src/_components/navbar/authnavbar/AuthNavbar";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { getSession } from "../lib/authentication";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_AUTH_CLIENT_ID } from "@/config";

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

export default async function UserAuthLayout({ children }) {
  const userDetails = await getSession();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} ${poppins.variable}`}
    >
      <head />
      <body>
        <AppContextProvider>
          <AuthContextProvider authData={userDetails}>
            <ModelContextProvider>
              <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
                <div>
                  <AuthNavbar />
                </div>
                <div className="auth_layout_children_wrapper">{children}</div>
                <div>
                  <MainFooter />
                </div>
              </GoogleOAuthProvider>
            </ModelContextProvider>
          </AuthContextProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
