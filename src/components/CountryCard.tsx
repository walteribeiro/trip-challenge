import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  imageUrl: string;
  city: string;
  country: string;
  flagUrl: string;
}

export default function CountryCard({ imageUrl, city, country, flagUrl }: Props) {
  return (
    <VStack w="256px" h="279px" borderRadius={4} borderWidth={1} borderColor="yellow.500" spacing="18px" shadow="lg">
      <Image src={imageUrl} alt={city} h="173px" />

      <HStack w="100%" justifyContent="space-between" px="24px">
        <VStack alignItems="flex-start">
          <Heading fontWeight="semibold" fontSize={20}>{city}</Heading>
          <Text fontWeight="medium" fontSize={16} color="gray.400">{country}</Text>
        </VStack>

        <Image src={flagUrl} alt={country} />
      </HStack>
    </VStack>
  );
}
