import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterBox.scss';

export default class CharacterBox extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section className="character-box">
        <CharacterCard />
        {/* The above is a placeholder; this will be a const variable representing a mapping over the cards array   */}
      </section>
    )
  }
}
