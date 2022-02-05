import { IToDoItem } from '../types';

const renderStatusElement = (status: IToDoItem['completed']) => (status ? 's' : 'span');

export default renderStatusElement;
