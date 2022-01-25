import React from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoStatusButton from '../toDoList/toDoListItem/toDoStatusButton/ToDoStatusButton';
import { IToDoItem, IToDoModalProps } from '../../types';
import { activeToDoItem } from '../../store/selectors';
import * as ACTIONS from '../../store/actions';

// TODO: we should sync the fields for modal and normal use cases
const ToDoField = ({
  onCancel,
  onSave
}: {
  onCancel: () => void;
  onSave: (updatedToDoItem: IToDoItem) => void;
}): JSX.Element => {
  const dispatch = useDispatch();
  const toDoItem = useSelector(activeToDoItem);
  const [inputValue, setInputValue] = React.useState(toDoItem.todo);

  const updatedToDoItem: IToDoItem = { ...toDoItem, todo: inputValue, editMode: false };

  // RESET active to do item, when to do field is destroyed
  React.useEffect(
    () => () => {
      dispatch(ACTIONS.setActiveToDoItem(null));
    },
    [dispatch]
  );

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);
  const handleSave = () => onSave(updatedToDoItem);
  const handleCancel = () => {
    setInputValue(toDoItem.todo);
    onCancel();
  };
  const handleStatus = () => {
    dispatch(ACTIONS.updateToDoItem({ ...toDoItem, completed: !toDoItem.completed }));
    dispatch(ACTIONS.setActiveToDoItem({ ...toDoItem, completed: !toDoItem.completed }));
  };
  const handleEdit = () =>
    dispatch(ACTIONS.setActiveToDoItem({ ...toDoItem, editMode: !toDoItem.editMode, todo: inputValue }));

  if (toDoItem.editMode)
    return (
      <Flex flexDirection='column' width='100%'>
        <Input size='sm' value={inputValue} onChange={handleInputValue} />
        <ButtonGroup my={2} size='sm'>
          <Button colorScheme='teal' onClick={handleSave}>
            Save
          </Button>
          <Button variant='outline' onClick={handleCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Flex>
    );

  return (
    <>
      <ToDoStatusButton completed={toDoItem.completed} onClick={handleStatus} />
      <Text as='span' fontSize='xl' fontWeight='700' ml={2} onClick={handleEdit}>
        {toDoItem.todo}
      </Text>
    </>
  );
};

const ToDoModal = ({ isOpen, onClose }: IToDoModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleOnCancel = () => onClose();
  const handleOnSave = (updatedToDoItem: IToDoItem) => {
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} size='lg' onClose={onClose}>
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
  );
};
export default ToDoModal;
