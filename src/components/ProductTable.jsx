import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { fetchProduct, updateProduct } from "../api";

const ProductTable = () => {
  const queryClient = useQueryClient();

  // Fetch product data
  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });

  // Mutation to update product
  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const handleUpdate = () => {
    // Example update: changing the product name
    mutation.mutate({ ...data, name: "Updated Product Name" });
  };

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading data</div>;

  return (
    <Box maxW="100%" mx="auto" mt="5" p="5" borderWidth="1px" borderRadius="lg">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Product Name</Th>
            <Th display="flex">
              Price (<FaIndianRupeeSign />)
            </Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.sku.map((skuItem, index) => (
            <Tr key={index}>
              <Td>{skuItem.id}</Td>
              <Td>{data.name}</Td>
              <Td>{skuItem.selling_price}</Td>
              <Td>
                {new Date(data.updated_on).toLocaleDateString()} (
                {new Date(data.updated_on).toLocaleTimeString()})
              </Td>
              <Td>
                <HiDotsHorizontal />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Product Name</Th>
            <Th display="flex">
              Price (<FaIndianRupeeSign />)
            </Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

export default ProductTable;
