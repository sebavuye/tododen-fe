import React from 'react';
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import ToDoStatusButton from '../toDoList/toDoListItem/toDoStatusButton/ToDoStatusButton';
import { IToDoModalProps } from '../../types';

const ToDoModal = ({ isOpen, onClose, onStatusClick, toDoItem }: IToDoModalProps): JSX.Element => (
  <Modal isOpen={isOpen} size='lg' onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader fontSize='sm'>Edit To Do</ModalHeader>
      <ModalCloseButton />
      <ModalBody mb={8}>
        <Flex alignItems='center'>
          <ToDoStatusButton completed={toDoItem.completed} onClick={() => onStatusClick(toDoItem)} />
          <Text as='span' fontSize='xl' fontWeight='700' ml={2}>
            {toDoItem.todo}
          </Text>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ToDoModal;
