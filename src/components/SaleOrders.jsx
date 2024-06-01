/* eslint-disable react/prop-types */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Spinner,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  fetchAllOrders,
  fetchActiveOrders,
  fetchCompletedOrders,
} from "../api";
import SaleOrderEditModal from "./SaleOrderEditModal";

const SaleOrders = ({ view }) => {
  const fetchFunction = () => {
    switch (view) {
      case "active":
        return fetchActiveOrders();
      case "completed":
        return fetchCompletedOrders();
      default:
        return fetchAllOrders();
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["saleOrders", view],
    queryFn: fetchFunction,
  });

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const handleOpenModal = (order, readOnly) => {
    setSelectedOrder(order);
    setReadOnly(readOnly);
    setModalOpen(true);
  };

  if (isLoading) return <Box maxW="100%" display="flex" justifyContent="center"> <Spinner /></Box>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th display="flex">
              Price (<FaIndianRupeeSign />)
            </Th>
            <Th>Last Modified</Th>
            <Th>Status</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.customerName}</Td>
              <Td>{item.price}</Td>
              <Td>
                {new Date(item.lastModified).toLocaleDateString() +
                  " (" +
                  new Date(item.lastModified).toLocaleTimeString() +
                  ")"}
              </Td>
              <Td>{item.status}</Td>
              <Td>
                <IconButton
                  icon={<HiDotsHorizontal />}
                  onClick={() => handleOpenModal(item, view === "completed")}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th display="flex">
              Price (<FaIndianRupeeSign />)
            </Th>
            <Th>Last Modified</Th>
            <Th>Status</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Tfoot>
      </Table>
      {selectedOrder && (
        <SaleOrderEditModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          order={selectedOrder}
          readOnly={readOnly}
        />
      )}
    </>
  );
};

export default SaleOrders;
