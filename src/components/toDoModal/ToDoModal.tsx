import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import classNames from 'classnames';
import { FaTag } from 'react-icons/fa';

import * as ACTIONS from '../../store/actions';
import ToDoModalListItem from './toDoModalListItem/ToDoModalListItem';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import LabelSelect from '../labelSelect/LabelSelect';
import { IToDoItem, IToDoModalProps } from '../../types';

const ToDoModal = ({ isOpen, labels, onClose, onSetLabels, toDoItem }: IToDoModalProps): JSX.Element => {
  const dispatch = useDispatch();
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [labelMenuVisibility, setLabelMenuVisibility] = useState(false);

  const handleOnClose = () => {
    if (readOnly) {
      onClose();
      const updatedToDoItem: IToDoItem = {
        ...toDoItem,
        labels
      };
      delete updatedToDoItem.readOnly;

      dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    } else {
      setConfirmationModal(true);
    }
  };

  const handleConfirmationCancel = () => setConfirmationModal(false);

  const handleConfirmationDiscard = () => {
    setConfirmationModal(false);
    setReadOnly(true);
    onClose();
    onSetLabels(toDoItem.labels);
  };

  const handleLabelsMenuVisibility = () => {
    setLabelMenuVisibility(prevState => !prevState);
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} size='lg' onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent width={{ base: '90%', md: '100%' }}>
          <ModalHeader fontSize='sm'>Edit To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={2} position='relative'>
            <Flex alignItems='center'>
              <ToDoModalListItem
                labels={labels}
                readOnly={readOnly}
                toDoItem={toDoItem}
                onReadOnly={setReadOnly}
                onSave={onClose}
              />
            </Flex>
            <Flex justifyContent='flex-end'>
              <Button
                className={classNames({ 'h-pointer-events-none h-touch-events-none': labelMenuVisibility })}
                size='sm'
                onClick={handleLabelsMenuVisibility}>
                <Icon as={FaTag} boxSize='.9em' color='gray.700' />
              </Button>
            </Flex>
            <LabelSelect
              dropdownVisibility={labelMenuVisibility}
              labels={labels}
              toDoItem={toDoItem}
              onBlur={() => setLabelMenuVisibility(false)}
              onSetLabels={onSetLabels}
            />
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
