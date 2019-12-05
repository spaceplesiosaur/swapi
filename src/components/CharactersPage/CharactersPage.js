import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import './CharactersPage.scss';

const CharactersPage = ({sharedData, user, logOut}) => {

  return (
    <section className="characters-page">
      <header>
        <h2>Episode {sharedData.episode}: {sharedData.title}</h2>
        <UserProfile
          user={user}
          logOut={logOut}
        />
      </header>
      <main className="crawl-text">
        <section>
          <div>
            <h4>{sharedData.title}</h4>
            <p>{sharedData.scroll}</p>
          </div>
        </section>
      </main>
      <CharacterBox
        characters={sharedData.characters}
      />

    </section>
  )
}

export default CharactersPage;
