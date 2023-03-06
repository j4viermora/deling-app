import { uploadImage } from "@/firebase/storage";
import { atom, useAtom } from "jotai";
import { useState } from "react";

const isLoading = atom(false);

export const useFiles = () => {
  const [loading, setLoading] = useAtom(isLoading);
  const [file, setFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>("");
  const [fileUrl, setFileUrl] = useState<string | null>("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFilePreviewUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      return;
    }

    setFile(null);
    setFilePreviewUrl("");
  };

  const uploadFile = async (file: File) => {
    setLoading(true);
    try {
      const url = await uploadImage(file);
      setFileUrl(url);
    } catch (error: any) {
      return error;
    } finally {
      setLoading(false);
    }
  };
  return { uploadFile, loading, handleFile, file, fileUrl, filePreviewUrl };
};
