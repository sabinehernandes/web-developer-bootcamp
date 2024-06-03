import "./Pokemon.css";

export default function RandomPokemon() {
  const randomNum = Math.floor(Math.random() * 151 + 1);
  const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;

  return (
    <div className="Pokemon">
      <h1>Pokemon #{randomNum}</h1>
      <img src={baseURL} />
    </div>
  );
}