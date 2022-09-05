import ImagenRichAndMorting from './img/rick-morty.png';
import './App.css';
import {useState}from "react";
import Characters from './components/Characters.js'

function App() {

const [character,setCharacters]= useState(null);



const ReqApi =async()=> {
// ojo tiene que dar un estatus 200 o sino esta mal escrito acá
  const api= await fetch("https://rickandmortyapi.com/api/character")
  const characterApi= await api.json();
  setCharacters(characterApi.results)

}

console.log(character)
  return (
    <div className="App">
      <header className="App-header">
        
     <h1 className="title">Rick &  Morty</h1>
     {character? (
       <Characters character={character}   setCharacters={setCharacters}/>

     ):
     <>
     
     <img src={ImagenRichAndMorting} alt="Rick & morty" className="img-home"/>
     <button onClick={ReqApi}  className="btn-search">Buscar Personajes</button>
     
     </>
     
     }

      
      </header>
    </div>
  );
}

export default App;
