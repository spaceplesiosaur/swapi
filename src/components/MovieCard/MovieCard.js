import React from 'react';
import CharactersPage from '../CharactersPage/CharactersPage'
import './MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({id, episode, title, year, scroll, characters, user, logOut, setSharedData, sharedData}) => {
  const createSharedData = () => {
    const movieData = {id, episode, title, year, scroll, characters}
    setSharedData(movieData)
  }
  const createCharactersPage = () => {
    return <CharactersPage
            sharedData={sharedData}
            user={user}
            logOut={logOut}
            />
  }
  const openCharacterPage = () => {
    createSharedData()
    createCharactersPage()
  }
  return (
    <section className="movie-card">
      <h3>Episode {episode}</h3>
      <h4>{title}</h4>
      <p>{year}</p>

        <button onClick={openCharacterPage}><Link to={`/movies/${id}`} key={id}>View characters</Link></button>

    </section>
  )
}

export default MovieCard;
