import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./client";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);
const imagesRef = ref(storage, "images");

export const uploadImage = async (file: File) => {
  const imageRef = ref(imagesRef, file.name);
  try {
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
