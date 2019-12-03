import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import './CharactersPage.scss';

const CharactersPage = () => {

  return (
    <section className="charactersPage">
      <UserProfile />
      <h2></h2>
      <section className= "introScroll"></section>
      <CharacterBox />
    </section>
  )
}

export default CharactersPage;
