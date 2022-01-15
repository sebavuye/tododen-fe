import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Flex, Text } from '@chakra-ui/react';
import { IErrorProps } from '../../types';

// TODO: Check if we need this component
const Error = ({ error, loading, onReset }: IErrorProps): JSX.Element => (
  <Flex alignItems='center' h='100%' justifyContent='center' role='alert' w='100%'>
    <Alert
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      p={6}
      status='error'
      textAlign='center'
      variant='top-accent'>
      <AlertIcon boxSize='2em' mb={4} />
      <AlertTitle fontSize='xl'>Something went wrong</AlertTitle>
      <AlertDescription maxWidth='sm' my={4}>
        <Text fontSize='md'>{error.response?.data.message || error.request?.responseText}</Text>
        <Text as='pre' fontSize='xs' mb={2} mt={8}>
          {error.message}
        </Text>
      </AlertDescription>
      <Button isLoading={loading} onClick={onReset}>
        Try Again
      </Button>
    </Alert>
  </Flex>
);

export default Error;
