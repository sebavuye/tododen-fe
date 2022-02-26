import React from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { IConfirmationModalProps } from 'src/types';

const ConfirmationModal = ({ onCancel, onDiscard }: IConfirmationModalProps) => (
  <Modal isCentered isOpen size='lg' onClose={onCancel}>
    <ModalOverlay />
    <ModalContent width={{ base: '90%', md: '100%' }}>
      <ModalHeader fontSize='sm'>Discard Changes?</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>The changes you&apos;ve made won&apos;t be saved.</Text>
        <Flex justifyContent='flex-end' my={4}>
          <Button mx={2} size='sm' variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' ml={2} size='sm' onClick={onDiscard}>
            Discard
          </Button>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ConfirmationModal;
