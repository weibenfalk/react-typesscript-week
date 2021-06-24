import React from 'react';

type Props = {
  gender: string;
  className?: string;
};

const Gender: React.FC<Props> = ({ className, gender }) => (
  <p className={className}>{gender}</p>
);

export default Gender;
