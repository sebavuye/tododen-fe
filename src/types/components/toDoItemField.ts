import React from 'react';

export interface IToDoItemField {
  children: React.ReactNode;
  completed: boolean;
  defaultValue: string;
  disabled: boolean;
  editMode: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
