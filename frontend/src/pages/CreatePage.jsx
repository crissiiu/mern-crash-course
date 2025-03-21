import {
  Box,
  Button,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
  };

  return (
    <VStack spacing={0}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create new Product
      </Heading>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <Input
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <Input
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <Button colorScheme="blue" onClick={handleAddProduct} w="full">
            Add Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default CreatePage;
