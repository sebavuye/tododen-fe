import { ChakraStylesConfig } from 'chakra-react-select';
import { CSSObject } from '@emotion/react';
import { IToDoLabel } from '../../types';

export interface ISelectStylesProps<T> {
  container?: T;
  indicatorsContainer?: T;
  menu?: T;
  valueContainer?: T;
}

export const renderSelectStyles = (customStyles?: ISelectStylesProps<CSSObject>) => {
  const selectStyles: ChakraStylesConfig<IToDoLabel, true> = {
    container: provided => ({
      ...provided,
      borderColor: 'white',
      marginTop: '5px',
      position: 'absolute',
      right: '0',
      width: '100%',
      ...customStyles?.container
    }),

    valueContainer: provided => ({
      ...provided,
      backgroundColor: 'white',
      ...customStyles?.valueContainer
    }),
    indicatorsContainer: provided => ({
      ...provided,
      backgroundColor: 'white',
      ...customStyles?.indicatorsContainer
    }),
    menu: provided => ({
      ...provided,
      margin: '1px 0',
      borderBottomRadius: '0.375rem',
      ...customStyles?.menu
    })
  };

  return selectStyles;
};
