import {
  genericOnlyImageUplodHandler,
  genericSingleImageWithFormDataHandler,
} from "../_generichandler/generichandler";
import { UpdateBlogThumblin } from "../utils/blogsAction";
import { updateUserProfilePic } from "../utils/userActions";

export const handeluplodUserPic =
  genericOnlyImageUplodHandler(updateUserProfilePic);

// Handel Update Blog Thumblin
export const handelUploadThumblin =
  genericSingleImageWithFormDataHandler(UpdateBlogThumblin);
