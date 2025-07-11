import Axios from "axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterContainer from "../../components/CharacterContainer.tsx";


type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
};

type Data = {
    character: Character;
}

type CharacterAPI = {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    origin: {name: string};
    location: string;
}

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params;
        const url = `https://rickandmortyapi.com/api/character/${id}`;
        try{
            const response = await Axios.get<CharacterAPI>(url);

            const character: Character = {
                ...response.data,
                origin: response.data.origin.name
            };

            return ctx.render({character});

        }catch(_e){
            return new Response("Error de API");
        }
    }
};

const Page = (props:PageProps<Data>) => <CharacterContainer character={props.data.character}/>

export default Page;