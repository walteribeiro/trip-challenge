import type { NextPage } from 'next'
import { Center, Divider, Flex, Heading, HStack, Image, SimpleGrid, Text, useBreakpoint, useBreakpointValue, VStack } from '@chakra-ui/react'

import Header from '../components/Header'

const Home: NextPage = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex maxW={[375, 1440]} direction="column" m="0 auto">
      <Header />
      <HStack
        h={["163px", "335px"]}
        px={["16px", "140px"]}
        backgroundImage="assets/banner_background.png"
        backgroundRepeat="no-repeat"
      >
        <SimpleGrid columns={[1, 2]} spacingX={[null, "200"]} position="relative">
          <VStack color="gray.50" justifyContent="center" alignItems="flex-start">
            <Heading fontWeight="medium" fontSize={[20, 36]}>5 Continentes,</Heading>
            <Heading fontWeight="medium" fontSize={[20, 36]}>infinitas possibilidades.</Heading>
            <Text mt="20" fontSize={[14, 20]}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>

          {isWideScreen && (
            <Image
              maxW="417px"
              src="assets/airplane.png"
              alt="Airplane"
              transform="rotate(3deg)"
              position="absolute"
              right="140px"
            />
          )}
        </SimpleGrid>
      </HStack>

      <HStack
        px={["50px", "140px"]}
        mt="114px"
        justifyContent="space-between"
        flexWrap="wrap"        
      >
        <VStack h="145px" spacing={6}>
          {isWideScreen && <Image src="assets/cocktail.png" alt="Cocktail" />}
          <Text fontWeight="semibold" fontSize={24}>Vida noturna</Text>
        </VStack>
        <VStack h="145px" spacing={6}>
          {isWideScreen && <Image src="assets/surf.png" alt="Surf" />}
          <Text fontWeight="semibold" fontSize={24}>Praia</Text>
        </VStack>
        <VStack h="145px" spacing={6}>
          {isWideScreen && <Image src="assets/building.png" alt="Building" />}
          <Text fontWeight="semibold" fontSize={24}>Moderno</Text>
        </VStack>
        <VStack h="145px" spacing={6}>
          {isWideScreen && <Image src="assets/museum.png" alt="Museum" />}
          <Text fontWeight="semibold" fontSize={24}>Clássico</Text>
        </VStack>
        <VStack h="145px" spacing={6}>
          {isWideScreen && <Image src="assets/earth.png" alt="Earth" />}
          <Text fontWeight="semibold" fontSize={24}>e mais...</Text>
        </VStack>
      </HStack>

      <Center h="2px" mt="80px">
        <Divider borderBottomWidth="2px" borderBottomColor="gray.600" w="90px" opacity="1" />
      </Center>

      <VStack textAlign="center" my="50px">
        <Heading fontWeight="medium" fontSize={["20", "36"]}>Vamos nessa?</Heading>
        <Heading fontWeight="medium" fontSize={["20", "36"]}>Então escolha seu continente</Heading>
      </VStack>

      <VStack
        h={["250px", "450px"]}
        px={["94px", "100px"]}
        mb="40px"
        backgroundImage="assets/continent.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        color="white"
        textAlign="center"
        justifyContent="center"
      >
        <Heading fontWeight="bold" fontSize={["24", "48"]}>Europa</Heading>
        <Heading fontWeight="bold" fontSize={["14", "24"]}>O continente mais antigo.</Heading>
      </VStack>

    </Flex>
  )
}

export default Home
