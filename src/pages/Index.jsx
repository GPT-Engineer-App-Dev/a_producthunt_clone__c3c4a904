import { ChakraProvider, Box, Flex, Text, Input, Button, VStack, HStack, StackDivider, Heading, Image, IconButton, useColorMode, useColorModeValue, Spacer, Link, Badge } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaArrowUp } from "react-icons/fa";

const ProductCard = ({ name, description, upvotes }) => {
  return (
    <HStack w="full" p={4} bg={useColorModeValue("gray.100", "gray.700")} rounded="md" boxShadow="md" divider={<StackDivider borderColor={useColorModeValue("gray.300", "gray.600")} />}>
      <Box>
        <Image boxSize="80px" objectFit="cover" borderRadius="md" src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwYm94JTIwc2hvdHxlbnwwfHx8fDE3MDk4MTgzOTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={`Image of ${name}`} />
      </Box>
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
          {description}
        </Text>
      </VStack>
      <Spacer />
      <VStack>
        <IconButton aria-label="Upvote" icon={<FaArrowUp />} size="sm" colorScheme="green" />
        <Badge colorScheme="green">{upvotes}</Badge>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Box p={8} bg={useColorModeValue("gray.50", "gray.800")}>
        <Flex pb={4} justify="space-between" align="center">
          <Heading size="lg">ProductHunt Clone</Heading>
          <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound />
        </Flex>
        <Box mb={6}>
          <Input
            placeholder="Search for products..."
            size="lg"
            bg={useColorModeValue("white", "gray.600")}
            _placeholder={{ color: useColorModeValue("gray.400", "gray.300") }}
            _hover={{ bg: useColorModeValue("gray.200", "gray.500") }}
            _focus={{ bg: useColorModeValue("white", "gray.600") }}
            rightElement={
              <Button pos="absolute" right="0" top="0" bottom="0" roundedLeft={0}>
                <FaSearch />
              </Button>
            }
          />
        </Box>
        <VStack divider={<StackDivider />} spacing={4}>
          {/* Example products */}
          <ProductCard name="Product 1" description="This is an amazing product that solves problem X" upvotes={230} />
          <ProductCard name="Product 2" description="An innovative solution for issue Y" upvotes={129} />
          <ProductCard name="Product 3" description="A groundbreaking tool to do Z" upvotes={340} />
          {/* More products would be listed here */}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
