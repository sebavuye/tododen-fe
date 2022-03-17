import React from 'react';
import { Tag } from '@chakra-ui/react';
import { ILabelListProps } from '../../types';

const LabelList = ({ labels, size = 'sm' }: ILabelListProps): JSX.Element => (
  <div>
    {labels?.map(label => (
      <Tag key={label.id} colorScheme='gray' marginRight={2} marginY={1} size={size}>
        {label.label}
      </Tag>
    ))}
  </div>
);

export default LabelList;
