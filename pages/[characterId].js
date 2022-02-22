import { useRouter } from 'next/router';

export default function Character({character}) {
    const { isFallback } = useRouter();

    if (isFallback) {
      return <p>Carregando...</p>;
    }
    
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.sprites.front_default} />
      </div>
    )
  }
  
  export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.characterId}`);
    const data = await response.json();
  
    return {
      props: {
        character: data,
      }
    }
  };

  export const getStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json()
    return {
      paths: data.results.map(character => {
        const characterId = character.name.toLowerCase();
        return {
          params: {
            characterId
          }
        }
      }),
      fallback: false
    }
  }
  