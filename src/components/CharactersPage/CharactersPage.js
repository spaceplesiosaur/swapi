import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import './CharactersPage.scss';

const CharactersPage = ({sharedData, user, logOut}) => {

  return (
    <section className="charactersPage">
      <UserProfile
        user={user}
        logOut={logOut}
      />
      <h2>Episode {sharedData.episode}: {sharedData.title}</h2>
      <section className="scroll-box">
        <p>{sharedData.scroll}</p>
      </section>
      <CharacterBox
        characters={sharedData.characters}
      />
    </section>
  )
}

export default CharactersPage;
