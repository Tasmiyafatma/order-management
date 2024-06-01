/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Alert,
  AlertIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hardcodedUser = {
    id: 9,
    customer: 11908,
    customer_profile: {
      id: 11908,
      name: "Ram",
      email: "ram1999@gmail.com",
      pincode: "Mumbai",
      location_name: "Mumbai, Maharashtra, India",
      type: "C",
    },
    password: "Ram@123", // Dummy password for demonstration
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (
      username === hardcodedUser.customer_profile.email &&
      password === hardcodedUser.password
    ) {
      console.log("vdwfewfwfew");
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        maxW="md"
        w="full"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        textAlign="center"
      >
        <Heading as="h1" size="lg" mb={4}>
          Welcome back to
          <br />
          Order Management Dashboard
        </Heading>
        <Text fontSize="lg" mb={8}>
          Login here to continue
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
            <FormControl id="username">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
