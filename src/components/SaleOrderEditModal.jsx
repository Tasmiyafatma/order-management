import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSaleOrder } from "../api";

const SaleOrderEditModal = ({ isOpen, onClose, order, readOnly }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState(order);

  useEffect(() => {
    setFormData(order);
  }, [order]);

  const mutation = useMutation({
    mutationFn: updateSaleOrder,
    onSuccess: () => {
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
    if (!readOnly) {
      mutation.mutate(formData);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {readOnly ? "View Sale Order" : "Edit Sale Order"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Customer Name</FormLabel>
              <Input
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                isreadonly={readOnly.toString()}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Price</FormLabel>
              <NumberInput>
                <NumberInputField
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  isreadonly={readOnly.toString()}
                />
              </NumberInput>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Status</FormLabel>
              <Input
                name="status"
                value={formData.status}
                onChange={handleChange}
                isreadonly={readOnly.toString()}
              />
            </FormControl>
            {!readOnly && (
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            )}
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderEditModal;
