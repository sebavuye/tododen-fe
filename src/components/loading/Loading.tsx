import React from 'react';
import { Spinner, Text } from '@chakra-ui/react';
import { ILoadingProps } from '../../types';

const Loading = ({ children = 'Loading' }: ILoadingProps): JSX.Element => (
  <>
    <Spinner label='Loading' size='xs' />
    <Text fontSize='sm' fontWeight='700' ml={2}>
      {children}
    </Text>
  </>
);

export default Loading;
