/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSaleOrder } from "../api";

const SaleOrderFormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    customerName: "",
    price: 0,
    status: "active",
  });

  const mutation = useMutation({
    mutationFn: createSaleOrder,
    onSuccess: (newOrder) => {
      queryClient.invalidateQueries(["saleOrders"]);
      onClose();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting", formData);
    mutation.mutate(formData);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        + Sale Order
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Customer Name</FormLabel>
                <Input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Price</FormLabel>
                <NumberInput>
                  <NumberInputField
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </NumberInput>
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Status</FormLabel>
                <Input
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaleOrderFormModal;
