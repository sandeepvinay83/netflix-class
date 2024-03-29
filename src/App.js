import './App.css';
// import Main from './components/Main';
// import Nav from './components/Nav/Nav';
// import SearchResults from './components/SearchResults';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import { SearchProvider } from './context/SearchContext';
import { Routes, Route } from 'react-router-dom';

// import Row from "./components/Row/Row";
// import Nav from './components/Nav';
// import Row from "./components/Row";
// import requests from './api/requests';
// import {a,b} from "./Row";
//  destructuring
// {a:{}, b:{}}

function App() {
  return (
    <div className="App">
      <SearchProvider>
        {/* <Nav />
        <Main />
        <SearchResults /> */}
        
        {/* <Switch>
          <Route exact={true} path="/" Component={Home} />
          <Route exact={true} path="/search/:query" Component={Search} />
          <Route Component={NotFound} />
        </Switch> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search/:query" element={<Search />} />
          {/* Error route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </SearchProvider>



      {/* <Nav />
      <Row title="NETFLIX ORIGINALS" isLargePoster fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />     */}
    </div>
  );
}

export default App;


// component in react
// functional components
// it returns html 
// reusable block of code 
// html written in js is known as JSX
// App(a)


//  what is ajax 
// api - is a way for your backend and frontend to talk to each other
// ajax - asyncronus javascript and xml
// fetch 
// axios is a package on top of ajax which gives you a way to do ajax calls on a particular url

