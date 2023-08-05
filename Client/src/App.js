import './App.css';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About';
import Nav from './components/nav/Nav.jsx'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/detail/Detail';
import NotFound from './components/404/NotFound';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

function App() {


   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)


   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const data = await axios.get(URL + `?email=${email}&password=${password}`)
         const { access } = data.data;
         setAccess(data.data);
         access && navigate('/home');
      } catch (error) {
         console.log(error)
      }

   }

   async function onSearch(id) {
      try {
         const data = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.data.name) {
            console.log('new');
            setCharacters((oldChars) => [...oldChars, data.data]);
         }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
         console.log(error)
      }
   }

   
   function onClose(id) {
      const result = characters.filter(character => character.id !== parseInt(id))
      setCharacters(result)
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login}></Form>}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}> </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
         </Routes>
      </div>
   );
}

export default App;
