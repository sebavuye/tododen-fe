import { ChakraStylesConfig } from 'chakra-react-select';
import { IToDoLabel } from '../../types';

export const selectStyles: ChakraStylesConfig<IToDoLabel, true> = {
  container: provided => ({
    ...provided,
    borderColor: 'white',
    marginTop: '5px',
    position: 'absolute',
    right: '0',
    width: '100%'
  }),

  valueContainer: provided => ({
    ...provided,
    backgroundColor: 'white'
  }),
  indicatorsContainer: provided => ({
    ...provided,
    backgroundColor: 'white'
  }),
  menu: provided => ({
    ...provided,
    margin: '1px 0',
    borderBottomRadius: '0.375rem'
  })
};
