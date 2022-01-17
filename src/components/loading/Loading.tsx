import React from 'react';
import { Spinner, Text } from '@chakra-ui/react';
import { ILoadingProps } from '../../types';
import { LOADING_DELAYS, TO_DO_LOADING_MESSAGES } from '../../constants';

const Loading = ({
  children = TO_DO_LOADING_MESSAGES.DEFAULT,
  delay = LOADING_DELAYS.NONE
}: ILoadingProps): JSX.Element | null => {
  const [delayed, setDelayed] = React.useState<boolean>(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (delay) {
      timeout = setTimeout(() => setDelayed(false), delay);
    } else {
      setDelayed(false);
    }

    return () => clearTimeout(timeout);
  }, [delay, delayed]);

  if (!delayed)
    return (
      <>
        <Spinner label='Loading' size='xs' />
        <Text fontSize='sm' fontWeight='700' ml={2}>
          {children}
        </Text>
      </>
    );

  return null;
};

export default Loading;
