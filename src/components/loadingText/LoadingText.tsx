import React from 'react';
import { useSelector } from 'react-redux';
import { EToDoListLoadingKeys, ILoadingTextProps, IToDoListLoadingMessages } from '../../types';
import { loadingStateSelector } from '../../store/selectors';
import { TO_DO_LOADING_MESSAGES } from '../../constants';

export const LoadingText = ({
  children = TO_DO_LOADING_MESSAGES.DEFAULT,
  loadingKeys
}: ILoadingTextProps): JSX.Element => {
  const { components } = useSelector(loadingStateSelector);

  const loadingComponents = components.filter(component => component.loading);
  const loadingComponentsUserSelection = loadingComponents.filter(component =>
    loadingKeys?.includes(component.key as EToDoListLoadingKeys)
  );

  const loadingComponentsKeys = loadingComponentsUserSelection.map(
    component => TO_DO_LOADING_MESSAGES[component.key as keyof IToDoListLoadingMessages]
  );

  if (!loadingKeys) return <span>{children}</span>;
  if (loadingComponentsKeys && loadingComponentsKeys.length === 1) return <span>{loadingComponentsKeys[0]}</span>;
  return <span>{children}</span>;
};
