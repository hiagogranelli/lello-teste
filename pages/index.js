export default function Home({pokemons}) {
  return (
    <div>
      {pokemons.map(avatar => {
        return (
          <ul key={avatar.name}>
            <a href={avatar.name.toLowerCase()}>
              <li>{avatar.name}</li>
            </a> 
          </ul>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();

  return {
    props: {
      pokemons: data.results,
    }
  }
};
