import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatableSelect, MultiValue } from 'chakra-react-select';
import { nanoid } from 'nanoid';
import { CSSObject } from '@emotion/react';

import { ISelectStylesProps, renderSelectStyles } from './styles';
import { IToDoLabel } from '../../types';
import * as ACTIONS from '../../store/actions';
import { toDoLabelsStateSelector } from '../../store/selectors/toDoLabels';

interface ILabelSelectProps {
  dropdownVisibility: boolean;
  labels: MultiValue<IToDoLabel> | undefined;
  onBlur: () => void;
  onSetLabels: (newValue: MultiValue<IToDoLabel> | undefined) => void;
  selectStyles?: ISelectStylesProps<CSSObject>;
}

const LabelSelect = ({
  dropdownVisibility,
  labels,
  onBlur,
  onSetLabels,
  selectStyles
}: ILabelSelectProps): JSX.Element | null => {
  const dispatch = useDispatch();
  const toDoLabels = useSelector(toDoLabelsStateSelector);

  const handleSelectLabel = (newValue?: MultiValue<IToDoLabel>) => {
    onSetLabels(newValue);
  };

  const handleCreateNewLabel = (label: string) => {
    const newLabel: IToDoLabel = {
      id: nanoid(),
      label,
      value: label,
      onSuccess: () => {
        const currentLabelsArray = labels as IToDoLabel[];
        const updatedLabelList = [...currentLabelsArray, newLabel] as MultiValue<IToDoLabel>;
        onSetLabels(updatedLabelList);
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
      chakraStyles={renderSelectStyles(selectStyles)}
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
    />
  );
};

export default LabelSelect;
