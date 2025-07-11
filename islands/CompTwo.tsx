//islands/CompTwo.tsx
import { FunctionComponent } from "preact";
import { page, search } from "../signals.ts";
import { useEffect, useState } from "preact/hooks";
import CharactersContainer from "../components/CharactersContainer.tsx";

type Character = {
    id: string
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string,
    origin: string;
    location: string;
};

type Data = {
    characters: Array<Character>;
}

type CharacterAPI = {
    results: Array<{
        id: string
        name: string;
        image: string;
        status: string;
        species: string;
        gender: string,
        origin: string;
        location: string; 
    }>;
};



const CompTwo: FunctionComponent = () => {

  const [names, setNames] = useState<string[]>([])

  const getNames = async () => {
    const json = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}&name=${search.value}`)
    const data = await json.json()
    setNames(data.results.map((
        e: { name: any;}) => e.name))
  }

  useEffect(() => {
    getNames()
  }, [search.value, page.value])


  return (
    <div>
        <ul>
        {names.map(e => <li key={e}>{e}</li>)}
        </ul>
    </div>
  );
};

export default CompTwo;