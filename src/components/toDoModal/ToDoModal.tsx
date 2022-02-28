import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { CreatableSelect, MultiValue } from 'chakra-react-select';
import { IoPricetag } from 'react-icons/io5';
import { toDoLabelsStateSelector } from '../../store/selectors/toDoLabels';
import ToDoModalListItem from './toDoModalListItem/ToDoModalListItem';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { IToDoItem, IToDoLabel, IToDoModalProps } from '../../types';
import * as ACTIONS from '../../store/actions';

const ToDoModal = ({ isOpen, onClose, toDoItem }: IToDoModalProps): JSX.Element => {
  const dispatch = useDispatch();
  const toDoLabels = useSelector(toDoLabelsStateSelector);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [labelMenuVisibility, setLabelMenuVisibility] = useState(false);
  const [labels, setLabels] = useState<MultiValue<IToDoLabel> | undefined>(toDoItem.labels);

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

  const handleLabelsMenu = () => {
    setLabelMenuVisibility(prevState => !prevState);
  };

  const handleUpdateLabels = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, labels };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} size='lg' onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent width={{ base: '90%', md: '100%' }}>
          <ModalHeader fontSize='sm'>Edit To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <Flex alignItems='center'>
              <ToDoModalListItem readOnly={readOnly} toDoItem={toDoItem} onReadOnly={setReadOnly} onSave={onClose} />
            </Flex>
            <Flex justifyContent='flex-end'>
              <IoPricetag cursor='pointer' onClick={handleLabelsMenu} />
            </Flex>
            {labelMenuVisibility && (
              <CreatableSelect
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                options={toDoLabels}
                selectedOptionStyle='check'
                size='sm'
                value={labels}
                onChange={newValue => setLabels(newValue)}
                onMenuClose={handleUpdateLabels}
              />
            )}
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
