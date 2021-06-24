import React from 'react';
// Styles
import { Wrapper } from './Card.styles';

type Props = {
  name: string;
  imgUrl: string;
};

const Card = ({ name, imgUrl }: Props) => (
  <Wrapper>
    <p>{name}</p>
    <p>{imgUrl}</p>
  </Wrapper>
);

// const Card: React.FC<Props> = ({ name, imgUrl }) => (
//   <Wrapper>
//     <p>{name}</p>
//     <p>{imgUrl}</p>
//   </Wrapper>
// );

export default Card;
