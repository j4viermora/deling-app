import { useAuth } from "@/hooks";
import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactElement } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { login } = useAuth();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>
              Inicia sesión en tu cuenta deling
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Stack spacing={10}>
                <Button
                  onClick={login}
                  leftIcon={<FcGoogle />}
                  bg={"white"}
                  color={"black"}
                  _hover={{
                    bg: "gray.100",
                  }}
                >
                  Continuar con google
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
