export default function Character({character}) {
    return (
      <div>
        <img src={character.photoUrl} alt="Foto do personagem" />
        <h1>{character.name}</h1>
        <p>{character.affiliation}</p>
      </div>
    )
  }
  
  export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId.replace(/\-/g, "+")}`);
    const data = await response.json();
  
    return {
      props: {
        character: data[0],
      }
    }
  };

  export const getStaticPaths = async () => {
    const response = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const data = await response.json()
    console.log(data)
    return {
      paths: data.map(character => {
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
  