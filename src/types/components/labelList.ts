import { MultiValue } from 'chakra-react-select';
import { ThemingProps } from '@chakra-ui/react';
import { IToDoLabel } from '../toDoLabels';

export type TLabels = MultiValue<IToDoLabel> | undefined;

export interface ILabelListProps {
  labels: TLabels;
  size?: ThemingProps<'Tag'>['size'];
}
