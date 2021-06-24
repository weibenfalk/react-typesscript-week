export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
}

export const fetchCharacter = async (id: number): Promise<Character> => {
  const result: Response = await fetch(
    `https://finalspaceapi.com/api/v0/character/${id}`,
  );

  if (!result.ok) {
    throw new Error('Something went horrible wrong!');
  }

  return await result.json();
};
