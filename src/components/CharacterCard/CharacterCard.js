import React, {Component} from 'react'
import './CharacterCard.scss'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import PropTypes from 'prop-types'

class CharacterCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false
    }
  }

  componentDidMount() {
    this.setState({isFavorite: this.props.isFavorite})
  }

  toggleCard = () => {
    this.setState({isFavorite: !this.state.isFavorite})
  }

  render() {
    const { name, species, planet, population, films} = this.props.character
    const filmList = films.map((film, ind) => <li key={'movie' + (ind+1)} >{film}</li>)

    return (
      <section className="character-card">
        <FavoriteButton
          card={this.props.character}
          isFavorite={this.state.isFavorite}
          toggleCard={this.toggleCard}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite} />
        <header>
          <h3>{name}</h3>
          <p>{species}</p>
        </header>
        <div className="character-card-planet">
          <p>{planet}</p>
          <p>{population}</p>
        </div>
        <ul className="character-card-movies">
          <h4>Movies:</h4>
          {filmList}
        </ul>
      </section>
    )
  }
}

export default CharacterCard

CharacterCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func.isRequired
}
