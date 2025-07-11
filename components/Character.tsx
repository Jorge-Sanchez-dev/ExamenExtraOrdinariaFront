import { FunctionComponent } from "preact/src/index.d.ts";

type Props = {
    id: string
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string,
    origin: string;
    location: string;
};

const Chracter: FunctionComponent<Props> = (props) => {
    return (
        <div class="characterComponent">
            <img src = {props.image} alt = {props.name} />
            <div> 
                <div> Status: {props.status}</div>
                <div> Species: {props.species}</div>
                <div> Gender: {props.gender}</div>
                <div> Origin: {props.origin}</div>
                <div> Location: {props.location}</div>
                <a href="/" class = "volver"> Volver </a>
            </div>
        </div>
    );
};

export default Chracter;