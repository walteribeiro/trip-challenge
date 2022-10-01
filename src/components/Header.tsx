import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex h={["50", "100"]} alignItems="center" justifyContent="center">
      <Image src="assets/logo.png" alt="Logo" h={["20px", "46px"]} />
    </Flex>
  );
}
