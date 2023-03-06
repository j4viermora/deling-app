import { useRouter } from "next/router";
import { loginWithGoogle, logout } from "@/firebase/auth";
import { USER_STATES, useSession } from "./useSession";
import { useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();
  const { session } = useSession();
  const { user } = session;

  const login = async () => {
    try {
      await loginWithGoogle();
      router.push("/admin/products");
    } catch (error) {
      return error;
    }
  };

  const startLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/login");
  }, [user]);

  return {
    login,
    startLogout,
  };
};
