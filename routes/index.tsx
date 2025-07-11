import CompOne from "../islands/CompOne.tsx";
import CompTwo from "../islands/CompTwo.tsx";
import CompThree from "../islands/CompThree.tsx";

export default function Home() {
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div><CompOne/><CompTwo/><CompThree/></div>
    </div>
  );
}
