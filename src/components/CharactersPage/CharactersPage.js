import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import './CharactersPage.scss';

const CharactersPage = (props) => {
  return (
    <section className="characters-page">
      <header>
        <h2>Episode {props.movie.episode_id}: {props.movie.title}</h2>
        <UserProfile
          user={props.user}
          logOut={props.logOut}
        />
      </header>
      <main className="crawl-text">
        <section>
          <div>
            <h4>{props.movie.title}</h4>
            <p>{props.movie.scroll}</p>
          </div>
        </section>
      </main>
      <CharacterBox
        characters={props.movie.characters}
      />

    </section>
  )
}

export default CharactersPage;
