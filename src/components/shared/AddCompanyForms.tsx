import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Flex,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Image,
  Box,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useSession } from "@/hooks";
import { useRouter } from "next/router";
import { useFiles } from "@/hooks/useFiles";

// valdation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  description: Yup.string().required("Description is required"),
  slug: Yup.string().required("Slug is required"),
});

export const AddCompanyForm = () => {
  const toast = useToast();
  const router = useRouter();
  const { addRestaurant } = useRestaurant();
  const { session } = useSession();
  const { uploadFile, handleFile, filePreviewUrl, file, fileUrl, loading } =
    useFiles();

  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      address: "",
      description: "",
      logoUrl: "",
      slug: "",
    },
    onSubmit: async (values) => {
      file && (await uploadFile(file));
      addRestaurant({
        ...values,
        ownerEmail: session.user?.email!,
        logoUrl: fileUrl ? fileUrl : "",
      }).then(() => {
        toast({
          title: "Restaurante agregado",
          description: "El restaurante ha sido agregado correctamente",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/admin/products");
      });
    },
    validationSchema,
  });

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Detalles del restaurante
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl
          as={GridItem}
          colSpan={[6, 3]}
          isInvalid={!!errors.name && touched.name}
        >
          <FormLabel
            htmlFor="name"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Nombre del restaurante
          </FormLabel>
          <Input
            id="name"
            type="text"
            required={true}
            placeholder="Nombre del restaurante"
            focusBorderColor="blue.400"
            shadow="sm"
            w="full"
            rounded="md"
            {...getFieldProps("name")}
          />
          {errors.name && touched.name && (
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          as={GridItem}
          colSpan={6}
          isInvalid={!!errors.address && touched.address}
        >
          <FormLabel
            htmlFor="address"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Street address
          </FormLabel>
          <Input
            type="text"
            id="address"
            autoComplete="street-address"
            focusBorderColor="blue.400"
            shadow="sm"
            w="full"
            rounded="md"
            placeholder="1234 Main St"
            {...getFieldProps("address")}
          />
        </FormControl>

        <FormControl
          as={GridItem}
          colSpan={[6, 6, null, 2]}
          isInvalid={!!errors.description && touched.description}
        >
          <FormLabel
            htmlFor="description"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Descripción
          </FormLabel>
          <Input
            type="text"
            id="description"
            autoComplete=""
            placeholder="Descripción del restaurante"
            focusBorderColor="blue.400"
            shadow="sm"
            w="full"
            rounded="md"
            {...getFieldProps("description")}
          />
        </FormControl>

        <FormControl
          as={GridItem}
          colSpan={[6, 6, null, 2]}
          isInvalid={!!errors.slug && touched.slug}
        >
          <FormLabel
            htmlFor="description"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Slug
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon children="https://deling.vercel.app/" />
            <Input
              focusBorderColor="blue.400"
              shadow="sm"
              placeholder="my-restaurant"
              rounded="md"
              {...getFieldProps("slug")}
            />
          </InputGroup>
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="logoUrl"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Logo
          </FormLabel>
          <input
            onChange={handleFile}
            type="file"
            id="logoUrl"
            autoComplete=""
            placeholder="Descripción del restaurante"
          />
          <Box marginTop={"1rem"}>
            <Image width={"25rem"} src={filePreviewUrl ? filePreviewUrl : ""} />
          </Box>
        </FormControl>
        <Flex mt="5%" w="100%" justifyContent="space-between">
          <Button
            isLoading={loading}
            w="7rem"
            colorScheme="blue"
            variant="solid"
            type="submit"
          >
            Listo
          </Button>
        </Flex>
      </form>
    </>
  );
};
