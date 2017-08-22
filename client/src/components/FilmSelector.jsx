import React from 'react';

class FilmSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {selectedIndex: undefined}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    const selectedFilm = this.props.films[newIndex];
    this.props.selectFilm(selectedFilm);
  }

  render() {
    const films = this.props.films.map(function (film, index) {
      return <option key={index} value={index}>{film.show_title}</option>
    });

    return (
      <select
        id="films"
        value={this.state.selectedIndex}
        onChange={this.handleChange}>
        <option>Film Selector</option>
        {films}
      </select>
    );
  }
}

module.exports = FilmSelector;