import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    character:{
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string,
    origin: string;
    location: string;
    }
};


const CharacterCard: FunctionalComponent<Props> = (props) => {
    const {id, name, image, status, species, gender, origin, location} = props.character;
    return (
        <div class = "characterCard" style={{textAling: "center"}}>
            <a href={`/character/${id}`}>
            <img src={image} alt={name}/> 
            <div>{name}</div>
            </a> 
            <div> Status: {status}</div>
                <div> Species: {species}</div>
                <div> Gender: {gender}</div>
                <div> Origin: {origin}</div>
                <div> Location: {location}</div>
        </div>
    );
};

export default CharacterCard;

