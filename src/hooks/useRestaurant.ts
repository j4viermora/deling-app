import * as restaurant from "@/firebase/db/restaurants";
import { RestaurantType } from "@/types/restaurant.types";
import { useCallback } from "react";

export const useRestaurant = () => {
  const addRestaurant = async (restaurantData: RestaurantType) => {
    return await restaurant.addRestaurant(restaurantData);
  };

  const getRestaurant = useCallback(
    async (ownerEmail: string) => {
      return await restaurant.getRestaurant(ownerEmail);
    },
    [restaurant.getRestaurant]
  );

  return {
    addRestaurant,
    getRestaurant,
  };
};
