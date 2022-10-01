import { Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import CountryCard from '../components/CountryCard';

import Header from '../components/Header';

export default function Continent() {
  return (
    <Flex maxW={[375, 1440]} direction="column" m="0 auto">
      <Header />

      <HStack
        h={["150px", "500px"]}
        px={["136px", "140px"]}
        pb={[null, "60px"]}
        backgroundImage="assets/europe.png"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        color="white"
        alignItems={["center", "flex-end"]}
      >
        <Heading fontWeight="semibold" fontSize={[28, 48]}>Europa</Heading>
      </HStack>

      <HStack
        spacing={[null, "70px"]}
        mt={["24px", "80px"]}
        px={["16px", "140px"]}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Text maxW="600px" mb={["16px", null]} fontSize={[14, 24]} color="gray.600" textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
          a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar
          Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <HStack alignItems="center" justifyContent="space-between" flex="1">
          <VStack alignItems={["flex-start", "center"]}>
            <Text fontWeight="semibold" color="yellow.400" fontSize={[24, 48]}>50</Text>
            <Text fontWeight="semibold" color="gray.600" fontSize={[18, 24]}>países</Text>
          </VStack>
          <VStack alignItems={["flex-start", "center"]}>
            <Text fontWeight="semibold" color="yellow.400" fontSize={[24, 48]}>60</Text>
            <Text fontWeight="semibold" color="gray.600" fontSize={[18, 24]}>línguas</Text>
          </VStack>
          <VStack alignItems={["flex-start", "center"]}>
            <Text fontWeight="semibold" color="yellow.400" fontSize={[24, 48]}>27</Text>
            <Text fontWeight="semibold" color="gray.600" fontSize={[18, 24]}>cidades +100</Text>
          </VStack>
        </HStack>
      </HStack>

      <VStack mt={["32px", "80px"]} mb="80" px={["16px", "140px"]} alignItems="flex-start">
        <Heading fontWeight="medium" fontSize={[24, 36]} mb={["20px", "40px"]}>Cidades +100</Heading>

        <SimpleGrid columns={[1, 4]} spacing={[5, 45]} alignSelf="center">

          <CountryCard
            imageUrl="assets/foto-1.png"
            city="Londres"
            country="Reino Unido"
            flagUrl="assets/country-1.png"
          />
          <CountryCard
            imageUrl="assets/foto-2.png"
            city="Paris"
            country="França"
            flagUrl="assets/country-2.png"
          />
          <CountryCard
            imageUrl="assets/foto-3.png"
            city="Roma"
            country="Itália"
            flagUrl="assets/country-3.png"
          />
          <CountryCard
            imageUrl="assets/foto-4.png"
            city="Praga"
            country="República Tcheca"
            flagUrl="assets/country-4.png"
          />
          <CountryCard
            imageUrl="assets/foto-5.png"
            city="Amsterdã"
            country="Holanda"
            flagUrl="assets/country-5.png"
          />

        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
