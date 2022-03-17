import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, ButtonGroup, Flex, Icon, Input, ListItem, Tag, Text, useDisclosure } from '@chakra-ui/react';
import { MultiValue } from 'chakra-react-select';
import classNames from 'classnames';
import { FaTag } from 'react-icons/fa';

import ToDoListItemStatusButton from './toDoListItemStatusButton/ToDoListItemStatusButton';
import ToDoListItemActionsMenu from './toDoListItemActionsMenu/ToDoListItemActionsMenu';
import ToDoModal from '../../toDoModal/ToDoModal';
import LabelSelect from '../../labelSelect/LabelSelect';
import { IToDoLabel, IToDoListItemProps } from '../../../types';
import { renderStatusElement } from '../../../utils';

const ToDoListItem = ({
  onCancel,
  onDelete,
  onEdit,
  onInlineEdit,
  onKeyboardInput,
  onSave,
  onStatusChange,
  toDoItem
}: IToDoListItemProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setInputValue] = useState<string>('');
  const [actionMenuVisibility, setActionMenuVisibility] = useState<boolean>(false);
  const [labelMenuVisibility, setLabelMenuVisibility] = useState(false);
  const [labels, setLabels] = useState<MultiValue<IToDoLabel> | undefined>(toDoItem.labels);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleEdit = () => {
    onEdit();
    onOpen();
  };

  const handleLabelsMenuVisibility = () => {
    setLabelMenuVisibility(prevState => !prevState);
  };

  useEffect(() => {
    setInputValue(toDoItem.task);
  }, [toDoItem]);

  return (
    <ListItem justifyContent='space-between'>
      {toDoItem.readOnly ? (
        <Flex
          alignItems='flex-start'
          justifyContent='space-between'
          width='100%'
          onMouseEnter={() => setActionMenuVisibility(true)}
          onMouseLeave={() => setActionMenuVisibility(false)}>
          <Flex flex={3}>
            <ToDoListItemStatusButton completed={toDoItem.completed} onClick={() => onStatusChange(toDoItem)} />
            <Flex flexDirection='column'>
              <Text as={renderStatusElement(toDoItem.completed)} ml={2} onClick={handleEdit}>
                {toDoItem.task}
              </Text>
              <Flex flexWrap='wrap' p={1}>
                {toDoItem.labels?.map(label => (
                  <Tag key={label.id} colorScheme='gray' marginRight={2} marginY={1} size='sm'>
                    {/* TODO: change label.label to appropriate name */}
                    {label.label}
                  </Tag>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex flex={1} justifyContent='flex-end'>
            <ToDoListItemActionsMenu
              readOnly={toDoItem.readOnly}
              visible={actionMenuVisibility}
              onDelete={() => onDelete(toDoItem.id)}
              onEdit={() => onInlineEdit(toDoItem.id)}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex flexDirection='column' width='100%'>
          <Input
            autoFocus
            size='sm'
            value={inputValue}
            onBlur={() => setActionMenuVisibility(false)}
            onChange={handleInput}
            onKeyDown={event => {
              if (event.key === 'Escape') {
                setLabels(toDoItem.labels);
              }
              onKeyboardInput(event, toDoItem, inputValue, labels);
              setActionMenuVisibility(false);
            }}
          />

          {/* TODO: create seperate component (label list) */}
          <Flex flexWrap='wrap' p={1}>
            {labels?.map(label => (
              <Tag key={label.id} colorScheme='gray' marginRight={2} marginY={1} size='sm'>
                {/* TODO: change label.label to appropriate name */}
                {label.label}
              </Tag>
            ))}
          </Flex>

          <Flex alignItems='center' justifyContent='space-between'>
            <Flex>
              <ButtonGroup my={2} size='sm'>
                <Button colorScheme='teal' onClick={() => onSave(toDoItem, inputValue, labels)}>
                  Save
                </Button>
                <Button
                  variant='outline'
                  onClick={() => {
                    onCancel(toDoItem.id);
                    setLabels(toDoItem.labels);
                  }}>
                  Cancel
                </Button>
              </ButtonGroup>
            </Flex>
            <Flex justifyContent='flex-end' position='relative' width='50%'>
              <Button
                className={classNames({ 'h-pointer-events-none h-touch-events-none': labelMenuVisibility })}
                size='sm'
                onClick={handleLabelsMenuVisibility}>
                <Icon as={FaTag} boxSize='.9em' color='gray.700' />
              </Button>
              <LabelSelect
                dropdownVisibility={labelMenuVisibility}
                labels={labels}
                selectStyles={{
                  container: { top: '35px' }
                }}
                toDoItem={toDoItem}
                onBlur={() => setLabelMenuVisibility(false)}
                onSetLabels={setLabels}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
      <ToDoModal isOpen={isOpen} labels={labels} toDoItem={toDoItem} onClose={onClose} onSetLabels={setLabels} />
    </ListItem>
  );
};

export default ToDoListItem;
