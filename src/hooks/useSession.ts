import { useEffect, useState } from "react";
import { auth } from "@/firebase/auth";
import { User } from "firebase/auth";
import { RestaurantType } from "@/types/restaurant.types";
import { useRestaurant } from "./useRestaurant";
import { useRouter } from "next/router";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};
export const useSession = () => {
  const router = useRouter();
  const { getRestaurant } = useRestaurant();
  const [user, setUser] = useState<User | null | undefined>(
    USER_STATES.NOT_KNOWN
  );
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!restaurant) {
        getRestaurant(user?.email!).then((res) => {
          if (res.length === 0) {
            return router.push("/add-restaurant-form");
          }
        });
      }
      setUser(user);
    });
  }, []);

  return {
    session: {
      user,
    },
  };
};
