import { cookies } from "next/headers"; // Import the cookies function
import { v4 as uuidv4 } from "uuid";
import { setCookie } from "nookies"; // For cookie handling
import CryptoJS from "crypto-js";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export async function getSession() {
  try {
    const cookieStore = cookies();
    const encryptedUserData = cookieStore.get("user")?.value;

    if (!encryptedUserData) {
      console.error("No user cookie found.");
      return null;
    }

    // Decrypt the encrypted data
    const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
      console.error("Decryption failed. Output is empty.");
      return null;
    }

    const userData = JSON.parse(decryptedData);
    return userData;
  } catch (error) {
    console.error("Error in getSession:", error);
    return null;
  }
}
