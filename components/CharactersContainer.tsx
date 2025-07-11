import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterCard from "./CharacterCard.tsx";


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

type Props = {
    characters: Character[];
};

const CharactersContainer: FunctionalComponent<Props> = (props) => {
    const characters = props.characters;
    return (
        <div class="charactersContainer">
            {characters.map ((ch) => (
                <CharacterCard key = {ch.id} character={ch}
                />
            ))}
        </div>
    );
};

export default CharactersContainer;
