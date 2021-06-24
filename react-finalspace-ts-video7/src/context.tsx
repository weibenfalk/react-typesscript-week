import React, { useState } from 'react';

type CharacterIdType = {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
};

const Context = React.createContext<CharacterIdType>({} as CharacterIdType);

const CharacterIdProvider: React.FC = ({ children }) => {
  const [characterId, setCharacterId] = useState(1);

  return (
    <Context.Provider value={{ characterId, setCharacterId }}>
      {children}
    </Context.Provider>
  );
};

export default CharacterIdProvider;

export const useCharacterId = () => React.useContext(Context);
