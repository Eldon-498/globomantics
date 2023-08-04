/* eslint-disable no-unused-vars */
import FeaturedHouse from './featured-house';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import './main-page.css';
import Header from './header';
import House from '../house';

function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(()=>{
    const fetchHouses = async () =>{
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    }
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }    

  }, [allHouses]);

  
  return (
    <Router>
    <div className="'container'">
      <Header subtitle="Providing houses all over the world"/>
      <House />
    </div>
    <Switch>
      <Route path="/">
        <FeaturedHouse house={featuredHouse}/>
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
