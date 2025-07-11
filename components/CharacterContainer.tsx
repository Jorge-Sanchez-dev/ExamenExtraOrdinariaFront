import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterComponent from "./Character.tsx"

type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string,
    origin: string;
    location: string;
};

type Props = {
    character: Character;
}

const CharacterContainer: FunctionalComponent<Props> = (props) => {
    const ch = props.character;
    return (
        <div class="characterContainer">
            <h1> {ch.name} </h1>
            <CharacterComponent name= {ch.name} id ={ch.id} image= {ch.image} status= {ch.status} species={ch.species} gender= {ch.gender} origin={ch.origin} location={ch.location}
            />
        </div>
    );
};

export default CharacterContainer;