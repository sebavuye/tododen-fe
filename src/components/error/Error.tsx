import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Flex
} from '@chakra-ui/react';
import { ErrorProps } from './types';

const Error = ({
  error,
  loading,
  resetErrorBoundary
}: ErrorProps): JSX.Element => (
  <Flex
    alignItems='center'
    h='100%'
    justifyContent='center'
    role='alert'
    w='100%'>
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
        <pre>{error.message}</pre>
      </AlertDescription>
      <Button isLoading={loading} onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </Alert>
  </Flex>
);

export default Error;
