import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatableSelect, MultiValue } from 'chakra-react-select';
import { nanoid } from 'nanoid';

import { selectStyles } from './styles';
import { IToDoItem, IToDoLabel } from '../../types';
import * as ACTIONS from '../../store/actions';
import { toDoLabelsStateSelector } from '../../store/selectors/toDoLabels';

interface ILabelSelectProps {
  dropdownVisibility: boolean;
  onBlur: () => void;
  toDoItem: IToDoItem;
}

const LabelSelect = ({ dropdownVisibility, onBlur, toDoItem }: ILabelSelectProps): JSX.Element | null => {
  const dispatch = useDispatch();
  const toDoLabels = useSelector(toDoLabelsStateSelector);
  const [labels, setLabels] = useState<MultiValue<IToDoLabel> | undefined>(toDoItem.labels);

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

  if (!dropdownVisibility) return null;
  return (
    <CreatableSelect
      autoFocus
      defaultMenuIsOpen
      isMulti
      chakraStyles={selectStyles} // should be imported from somewhere else
      closeMenuOnSelect={false}
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      hideSelectedOptions={false}
      noOptionsMessage={() => null}
      options={toDoLabels}
      placeholder={labels?.length ? 'Select or type a label' : 'Type a label'}
      selectedOptionStyle='check'
      size='sm'
      value={labels}
      onBlur={onBlur}
      onChange={newValue => handleSelectLabel(newValue)}
      onCreateOption={handleCreateNewLabel}
      onMenuClose={handleUpdateLabels}
    />
  );
};

export default LabelSelect;
