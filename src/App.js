import { data } from './data';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div>
      {data.map((data) => {
        return(
          <PersonCard data={data} />
        )
      })}
    </div>
  );
}

export default App;
