import { ReactNode } from "react";
import RouterLink from "next/link";
import { Flex, FlexProps, Link, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactNode;
  onClose: () => void;
}
export const NavItem = ({
  icon,
  children,
  path,
  onClose,
  ...rest
}: NavItemProps) => {
  return (
    <Link
      as={RouterLink}
      href={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClose}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
