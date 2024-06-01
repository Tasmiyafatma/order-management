import { useColorMode, Switch, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };

  return (
    <Flex justify="space-between" p={4} bg="gray.800" color="white">
      <Button onClick={() => navigate("/dashboard")} variant="link">
        Dashboard
      </Button>
      <Flex align="center">
        <Switch
          color="teal"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Button ml={4} onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
