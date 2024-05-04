import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaNewspaper, FaRegClock, FaExternalLinkAlt } from "react-icons/fa";

const newsArticles = [
  {
    title: "Local Park Renovation Begins Next Week",
    summary: "The much-awaited renovation of the Central Park is set to begin next Monday, with new facilities and green spaces planned.",
    imageUrl: "https://images.unsplash.com/photo-1705777973880-4544313d5975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHBhcmslMjByZW5vdmF0aW9ufGVufDB8fHx8MTcxNDgxNjkzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-15",
    readMoreUrl: "#",
  },
  {
    title: "Annual Book Fair Returns This October",
    summary: "Book enthusiasts rejoice as the annual book fair is scheduled to return with a lineup of popular authors and thousands of books.",
    imageUrl: "https://images.unsplash.com/photo-1631888720622-4746b895af14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwZmFpcnxlbnwwfHx8fDE3MTQ4MTY5MzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-14",
    readMoreUrl: "#",
  },
  {
    title: "High School Football Team Wins Championship",
    summary: "The local high school football team clinched the state championship last weekend, bringing the trophy home after five years.",
    imageUrl: "https://images.unsplash.com/photo-1612703738893-31b58c0aebd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZm9vdGJhbGwlMjB0ZWFtJTIwd2luc3xlbnwwfHx8fDE3MTQ4MTY5MzR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    publishedAt: "2023-09-13",
    readMoreUrl: "#",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            <FaNewspaper /> The Local Gazette
          </Heading>
          <Text fontSize="lg">Your trusted source for local news</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {newsArticles.map((article, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src={article.imageUrl} alt={article.title} borderRadius="md" />
              <Heading as="h3" size="md" mt={4}>
                {article.title}
              </Heading>
              <Text mt={2}>
                <FaRegClock /> {article.publishedAt}
              </Text>
              <Text mt={2} noOfLines={3}>
                {article.summary}
              </Text>
              <Link href={article.readMoreUrl} color="blue.500" isExternal mt={2}>
                Read More <FaExternalLinkAlt />
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
