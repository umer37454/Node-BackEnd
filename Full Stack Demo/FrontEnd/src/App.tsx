import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data] = useState('Games List');
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    axios.get('/api/getGamesList')
    .then((response) => {
      setGamesList(response.data);
    })
    console.log(gamesList);

  }, [])

  return (
    <>
      <div>A small App that is used for the learning purpose of CORS</div>
      <h2>{data}</h2>
      <p>{gamesList.length}</p>
      {
        gamesList.map((game: any) => (
          <div key={game.code}>
            <h2>{game.name}</h2>
            <h5>{game.code}</h5>
          </div>
        ))
      }
    </>
  )
}

export default App
