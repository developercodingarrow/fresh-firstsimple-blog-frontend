import { cookies } from "next/headers"; // Import the cookies function
import { v4 as uuidv4 } from "uuid";
import { setCookie } from "nookies"; // For cookie handling
import CryptoJS from "crypto-js";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export async function getSession() {
  try {
    const cookieStore = cookies(); // Access the cookies on the server
    const encryptedUserData = cookieStore.get("user")?.value; // Retrieve encrypted user data

    if (!encryptedUserData) {
      return null; // No user cookie found
    }

    // Decrypt the encrypted data
    const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) {
      console.error("Decryption returned null or empty string.");
      return null;
    }
    const userData = JSON.parse(decryptedData); // Parse the decrypted JSON data
    return userData;
  } catch (error) {
    console.error("Error in getSession:", error);
    return null;
  }
}
