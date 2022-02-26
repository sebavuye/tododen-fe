import { Fade, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { IEmptyState } from '../../types';

const EmptyState = ({ image, message, title }: IEmptyState): JSX.Element => (
  <Flex alignItems='center' flexDir='column' h='100%' justifyContent='center'>
    <Fade in transition={{ enter: { duration: 2 } }}>
      <Flex alignItems='center' flexDir='column' h='100%' justifyContent='center'>
        <Flex justifyContent='center' w='100%'>
          {image}
        </Flex>
        <Flex alignItems='center' flexDir='column' mt={6}>
          <Text fontSize='2xl' fontWeight={700}>
            {title}
          </Text>
          <Text color='gray.400'>{message}</Text>
        </Flex>
      </Flex>
    </Fade>
  </Flex>
);

export default EmptyState;
