import "../../../globals.css";
import { Inter, Noto_Serif, Poppins } from "next/font/google";
import dynamic from "next/dynamic";

import MainFooter from "@/src/_components/footer/MainFooter";
import MainAppNavbar from "@/src/_components/navbar/appnavbar/MainAppNavbar";
import UserProfileLayout from "@/src/_components/userProfile/layout/UserProfileLayout";
import AuthContextProvider from "@/src/_contextApi/authContext";
import ModelContextProvider from "@/src/_contextApi/ModelContextApi";

import { getSession } from "../../../lib/authentication";
import { API_BASE_URL, GOOGLE_AUTH_CLIENT_ID } from "@/config";
import { featuredTagsListAction } from "@/src/app/utils/tagActions";
import GoogleOneTap from "@/src/_components/googleAuth/GoogleOneTap";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppContextProvider from "@/src/_contextApi/AppContext";
import { featuresideBlogs } from "@/src/app/utils/blogsAction";
import AlternativeNotFound from "@/src/_components/CustomErrors/AlternativeNotFound";

const ClientCustomePageLoading = dynamic(
  () => import("../../../../_components/loading/CustomePageLoading"),
  {
    ssr: false,
  }
);
const ClientReportModel = dynamic(
  () => import("../../../../_components/models/ReportModel"),
  {
    ssr: false,
  }
);

const ClientAuthModel = dynamic(
  () => import("../../../../_components/models/AuthModel"),
  {
    ssr: false,
  }
);

const ClientMobileAppDrawer = dynamic(
  () => import("../../../../_components/app_Drawer/MobileAppDrawer"),
  {
    ssr: false,
  }
);

const ClientMobileSearchModel = dynamic(
  () => import("../../../../_components/models/MobileSearchModel"),
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

export async function generateMetadata({ params }) {
  const { slug } = params; // Extract slug from params

  try {
    const res = await fetch(`${API_BASE_URL}/user/user-details/${slug}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const initialData = await res.json();

    if (initialData.status === "success") {
      const user = initialData.result;

      return {
        title: `LitVerseHub | User Profile - ${user.name} | ${user.userName}`,
        description: `Explore the profile of ${user.name}, also known as ${user.userName}, on LitVerseHub.`,
        openGraph: {
          title: `LitVerseHub | User Profile - ${user.name}`,
          description:
            user.bio || `Discover ${user.name}'s content on LitVerseHub.`,
          images: [
            {
              url: user.userImg.url || "/default-profile.png",
              width: 100,
              height: 100,
              alt: `${user.name}'s profile picture`,
            },
          ],
        },
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: user.name,
          alternateName: user.userName,
          url: `https://litversehub.com/user-profile/${user.userName}`,
          image: user.userImg.url || "/default-profile.png",
          description: user.bio || "A passionate creator on LitVerseHub.",
          sameAs: user.socialLinks || [], // List of social media links if available
        },
      };
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {}; // Return empty metadata in case of an error
  }
}

export default async function ProfileLayout({ children, params }) {
  const userDetails = await getSession();
  const featuredTags = await featuredTagsListAction();
  const result = await featuresideBlogs();
  const slug = params?.slug;
  let userProfiledata;
  try {
    // Fetch the web stats using the auth token
    const res = await fetch(
      `${API_BASE_URL}/user-profile/user-details/${slug}`,
      {
        method: "GET", // GET request to fetch the blog
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json", // Ensure this is set to JSON
        },
      }
    );

    const initalData = await res.json();

    if (initalData.status === "Error") {
      return <AlternativeNotFound msg={initalData?.message} />;
    }

    if (initalData.status === "success") {
      userProfiledata = initalData.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    userProfiledata = null;
  }

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
                  {!userDetails && <GoogleOneTap />}
                </div>
                <div className="single_blog_layout_children_wrapper">
                  <UserProfileLayout
                    userProfile={userProfiledata}
                    featuredBlogs={result}
                  >
                    {children}
                  </UserProfileLayout>
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
