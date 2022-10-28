import './App.css';
import Add from './Components/Add/Add';
import Indicators from './Components/Indicators/Indicators';
import Logo from './Components/Logo/Logo';
import Map from './Components/Map/Map';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Search from './Components/Search/Search';
import TvGuide from './Components/Guide/TvGuide';
import TvNow from './Components/Now/TvNow';
import Visited from './Components/Visited/Visited';
import Weather from './Components/Weather/Weather';

const adds = [add1, add2];

function App() {
  return (
      <>
        // ГРИДАМИ - блоки:
        <section>
          // Новости = HeaderNews + Заголовки
          <News/>
          // Валюта и нефть
          <Indicators usd={usd} eur={eur} pet={pet}/>
          // Реклама
          <Add content={adds[0]}/>
        </section>
        <section>
          // Логотип
          <Logo/>
          // Меню над поиском
          <Menu/>
          //Поиск
          <Search example={forExample}/>
        </section>
        <Add content={adds[1]}/>
        <section>
          //Погода
          <Weather src={src} tNow={tNow} tMorning={tMorning} tDay={tDay}/>
          //Посещаемое
          <Visited> Content </Visited>
          // Карта
          <Map/>
          // Телепрограмма
          <TvGuide/>
          // В эфире
          <TvNow/>
        </section>
      </>
  );
}

export default App;
