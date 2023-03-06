import { IconType } from "react-icons";
import { FiBox, FiSettings, FiUser } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

export const LinkItems: Array<LinkItemProps> = [
    { name: "Productos", icon: FiBox , path: '/admin/products'},
    { name: "Restaurant", icon: FiSettings, path: '/admin/restaurant' },
    { name: "Mi perfil", icon: FiUser, path: '/admin/profile' },
  ];
  