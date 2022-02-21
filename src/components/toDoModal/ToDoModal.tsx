import React, { useState } from 'react';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import ToDoModalListItem from './toDoModalListItem/ToDoModalListItem';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { IToDoModalProps } from '../../types';

const ToDoModal = ({ isOpen, onClose, toDoItem }: IToDoModalProps): JSX.Element => {
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const handleOnClose = () => {
    if (readOnly) {
      onClose();
    } else {
      setConfirmationModal(true);
    }
  };

  const handleConfirmationCancel = () => setConfirmationModal(false);

  const handleConfirmationDiscard = () => {
    setConfirmationModal(false);
    setReadOnly(true);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} size='lg' onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='sm'>Edit To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <Flex alignItems='center'>
              <ToDoModalListItem readOnly={readOnly} toDoItem={toDoItem} onReadOnly={setReadOnly} onSave={onClose} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {confirmationModal && (
        <ConfirmationModal onCancel={handleConfirmationCancel} onDiscard={handleConfirmationDiscard} />
      )}
    </>
  );
};
export default ToDoModal;
