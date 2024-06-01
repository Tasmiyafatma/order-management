import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SaleOrderFormModal from "./SaleOrderFormModal";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SaleOrders from "./SaleOrders";
const queryClient = new QueryClient();
import { useState } from "react";

const Home = () => {
  const [view, setView] = useState("all");

  return (
    <Box>
      <Navbar />
      {/* <Box
        maxW="90%"
        mt="10"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        boxShadow="md"
        border="1px"
        borderColor="gray.200"
        p="4"
        borderRadius="lg"
      >
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Active Sale Orders
          </Button>
          <Button colorScheme="teal" variant="outline">
            Completed Sale Orders
          </Button>
        </Stack>

        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="outline">
            + Sale Order
          </Button>
        </Stack>
      </Box>

      <Box
        maxW="90%"
        mt="10"
        mx="auto"
        boxShadow="md"
        border="1px"
        borderColor="gray.200"
        p="4"
        borderRadius="lg"
      >
        <Heading colorScheme="teal" variant="solid">
          Sale Orders
        </Heading>
        <Box maxW="100%" h="2px" backgroundColor="gray.100" mt="5" />
        <QueryClientProvider client={queryClient}>
          <ProductTable />
        </QueryClientProvider>
      </Box> */}

      <QueryClientProvider client={queryClient}>
        <Box
          maxW="7xl"
          mx="auto"
          mt="10"
          p="5"
          borderWidth="1px"
          borderRadius="lg"
        >
          <SaleOrderFormModal />
          <Tabs
            variant="enclosed"
            mt={4}
            onChange={(index) =>
              setView(
                index === 0 ? "all" : index === 1 ? "active" : "completed"
              )
            }
          >
            <TabList>
              <Tab>All</Tab>
              <Tab>Active Sale Orders</Tab>
              <Tab>Completed Sale Orders</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SaleOrders view="all" />
              </TabPanel>
              <TabPanel>
                <SaleOrders view="active" />
              </TabPanel>
              <TabPanel>
                <SaleOrders view="completed" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </QueryClientProvider>
    </Box>
  );
};

export default Home;
