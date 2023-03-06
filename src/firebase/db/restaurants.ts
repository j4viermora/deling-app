import { RestaurantType } from "@/types/restaurant.types";
import {
  collection,
  addDoc,
  DocumentData,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "./db";

// add restaurant info to firestore
export const addRestaurant = async (
  restaurant: RestaurantType
): Promise<DocumentData> => {
  try {
    return await addDoc(collection(db, "restaurants"), restaurant);
  } catch (error: any) {
    return error;
  }
};

// get restaurant info from firestore
export const getRestaurant = async (ownerEmail: string) => {
  const q = query(
    collection(db, "restaurants"),
    where("ownerEmail", "==", ownerEmail)
  );
  try {
    const querySnapshot = await getDocs(q);
    let data: any[] = [];
    await querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error: any) {
    return error;
  }
};
