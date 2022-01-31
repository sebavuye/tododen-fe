import React from 'react';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IToDoEditModalProps } from '../../types';
import ToDoModalItemTaskField from './toDoField/ToDoModalItemTaskField';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { activeToDoItemSelector } from '../../store/selectors';

const ToDoEditModal = ({ isOpen, onClose }: IToDoEditModalProps): JSX.Element => {
  const activeToDoItem = useSelector(activeToDoItemSelector);
  const [confirmationModal, setConfirmationModal] = React.useState<boolean>(false);

  const handleOnClose = () => {
    if (activeToDoItem.readOnly) {
      onClose();
    } else {
      setConfirmationModal(true);
    }
  };

  const handleConfirmationCancel = () => setConfirmationModal(false);

  const handleConfirmationDiscard = () => {
    setConfirmationModal(false);
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
              <ToDoModalItemTaskField onSave={onClose} />
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
export default ToDoEditModal;
