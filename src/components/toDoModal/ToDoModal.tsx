import React from 'react';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { IToDoItem, IToDoModalProps } from '../../types';
import { activeToDoItem } from '../../store/selectors';
import * as ACTIONS from '../../store/actions';
import ToDoField from './toDoField/ToDoField';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

const ToDoModal = ({ isOpen, onClose }: IToDoModalProps): JSX.Element => {
  const dispatch = useDispatch();
  const toDoItem = useSelector(activeToDoItem);
  const [confirmationModal, setConfirmationModal] = React.useState(false);

  const handleOnCancel = (updatedToDoItem: IToDoItem) => {
    dispatch(ACTIONS.setActiveToDoItem(updatedToDoItem));
  };

  const handleOnSave = (updatedToDoItem: IToDoItem) => {
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    onClose();
  };

  const handleOnClose = () => {
    if (toDoItem.editMode) {
      setConfirmationModal(true);
    } else {
      onClose();
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
              <ToDoField onCancel={handleOnCancel} onSave={handleOnSave} />
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
