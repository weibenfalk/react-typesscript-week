import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Card name="Thomas Weibenfalk" imgUrl="url" />
    </Wrapper>
  );
};

export default App;
