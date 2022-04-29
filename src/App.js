 import logo from './logo.svg';
import './App.css';
import Movie from './movie';
import PageWrapper from './PageWrapper';

function App() {
  return (
    <PageWrapper>
      
      <Movie title="Oblivion (2012)" rate="10" runtime="2h21’" director="Joss Whedon" stars="Robert Downey Jr.,Chris Evans,Chris Hemsworth" image="images/uploads/mv1.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous <b>Loki</b> and his alien army from enslaving humanity...
      </Movie>


      <Movie title="into the wild (2012)" rate="7.8" runtime="2h21’" director="Joss Whedon" stars="Robert Downey Jr.,Chris Evans,Chris Hemsworth" image="images/uploads/mv2.jpg">
        As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
      </Movie>

    </PageWrapper>
  );
}

export default App;
