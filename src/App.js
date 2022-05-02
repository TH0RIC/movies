 import logo from './logo.svg';
import './App.css';
import Movie from './movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json'
import Pagination from './Pagination';

function App() {

  let movies=moviesJson;

  return (
    <PageWrapper>

      {movies.map(movie =>
        <Movie title={movie.title} rate={movie.rate} runtime="2h21’" director={movie.director} stars={movie.stars} image={movie.image} release={movie.release}>
          {movie.description}
        </Movie>
      )}

    <Pagination page={2} total={4} onChange={(page)=>{
      
      alert(page);

    }} />

   


    </PageWrapper>

    
  );
}

export default App;
