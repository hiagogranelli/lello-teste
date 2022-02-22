export default function Home({avatars}) {
  return (
    <div>
      {avatars.map(avatar => {
        return (
          <ul key={avatar._id}>
            <a href={avatar.name.toLowerCase().replace()}>
              <li>{avatar.name}</li>
            </a> 
          </ul>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const data = await response.json();

  return {
    props: {
      avatars: data,
    }
  }
};
