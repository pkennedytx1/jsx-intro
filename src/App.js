import { data } from './data';

const personCardComponent = ({ firstName, lastName, beachOrMountains }) => {
  return(
    <div>
      <img
        height='40px'
        alt={beachOrMountains === 'Mountains' ? 'mountains' : 'beach'}
        src={beachOrMountains === 'Mountains' ? 'mountain.svg' : 'beach.svg'}
      />
      <h2>{firstName} {lastName}</h2>
    </div>
  )
} 

function App() {
  return (
    <div>
      {data.map((data) => {
        return(
          personCardComponent(data)
        )
      })}
    </div>
  );
}

export default App;
