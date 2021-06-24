import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
import Item from './components/Item';
// Types
import { Character } from './api';
// Context hook
import { useCharacterId } from './context';
// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [characterId, setCharacterId] = React.useState(1);
  const { characterId, setCharacterId } = useCharacterId();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    setCharacterId(Number(inputRef.current?.value));
  };

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Card
            name={character.name}
            imgUrl={character.img_url}
            gender={character.gender}
          />
          <Item item={character} onClick={(item) => console.log(item.hair)} />
          <input type="text" ref={inputRef} />
          <button onClick={handleButtonClick}>Get Character</button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
