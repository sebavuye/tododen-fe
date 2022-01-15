import React from 'react';
import { EToDoListLoadingKeys } from '../loading';

export interface ILoadingTextProps {
  children?: React.ReactNode;
  loadingKeys?: EToDoListLoadingKeys[];
}
