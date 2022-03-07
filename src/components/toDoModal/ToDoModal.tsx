import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { CreatableSelect, MultiValue } from 'chakra-react-select';
import { IoPricetag } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { toDoLabelsStateSelector } from '../../store/selectors/toDoLabels';
import ToDoModalListItem from './toDoModalListItem/ToDoModalListItem';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';
import { IToDoItem, IToDoLabel, IToDoModalProps } from '../../types';
import * as ACTIONS from '../../store/actions';
import { selectStyles } from './styles';

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

  const handleLabelsMenuVisibility = () => {
    setLabelMenuVisibility(prevState => !prevState);
  };

  const handleSelectLabel = (newValue?: MultiValue<IToDoLabel>) => {
    setLabels(newValue);
  };

  const handleUpdateLabels = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, labels };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleCreateNewLabel = (label: string) => {
    const newLabel: IToDoLabel = {
      id: nanoid(),
      label,
      value: label,
      onSuccess: () => {
        const currentLabelsArray = labels as IToDoLabel[];
        const updatedLabels = [...currentLabelsArray, newLabel] as MultiValue<IToDoLabel>;
        setLabels(updatedLabels);
      }
    };
    dispatch(ACTIONS.createToDoLabel(newLabel));
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
              <ToDoModalListItem readOnly={readOnly} toDoItem={toDoItem} onReadOnly={setReadOnly} onSave={onClose} />
            </Flex>
            <Flex justifyContent='flex-end'>
              <IoPricetag cursor='pointer' onClick={handleLabelsMenuVisibility} />
            </Flex>
            {labelMenuVisibility && (
              <CreatableSelect
                autoFocus
                defaultMenuIsOpen
                isMulti
                chakraStyles={selectStyles}
                closeMenuOnSelect={false}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                hideSelectedOptions={false}
                noOptionsMessage={() => null}
                options={toDoLabels}
                placeholder={labels?.length ? 'Select or type a label' : 'Type a label'}
                selectedOptionStyle='check'
                size='sm'
                value={labels}
                onBlur={() => setLabelMenuVisibility(false)}
                onChange={newValue => handleSelectLabel(newValue)}
                onCreateOption={handleCreateNewLabel}
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
