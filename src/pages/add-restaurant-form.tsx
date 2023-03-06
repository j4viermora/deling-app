import { ReactElement } from "react";
import { Box, Card } from "@chakra-ui/react";

import { AddCompanyForm } from "@/components/shared/AddCompanyForms";
import Head from "next/head";

export default function AddRestaurantPage() {
  return (
    <>
      <Head>
        <title>Registro de Restaurant</title>
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={{
          base: "70vh",
          md: "100vh",
        }}
      >
        <Card
          maxWidth={800}
          minWidth={{
            base: "95%",
            md: "40%",
          }}
          p={6}
        >
          <AddCompanyForm />
        </Card>
      </Box>
    </>
  );
}

AddRestaurantPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
