import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App=()=> {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character`)
      console.log(result.data.results)
      
      setItems(result.data.results)
      setIsLoading(false)
    }
    fetchItems()
  }, [])



  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
      
    </div>
  );
}

export default App;
