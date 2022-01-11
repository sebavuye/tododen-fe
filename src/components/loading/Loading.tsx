import React from 'react';
import { Spinner, Text } from '@chakra-ui/react';

const Loading = (): JSX.Element => (
  <>
    <Spinner label='Loading' size='xs' />
    <Text fontSize='sm' fontWeight='700' ml={2}>
      Loading
    </Text>
  </>
);

export default Loading;
