import React from 'react';
import FilmSelector from '../components/FilmSelector.jsx';
import FilmDetails from '../components/FilmDetails.jsx'


class FilmContainer extends React.Component {
  constructor(props){
    super(props);
    this.requestComplete = this.requestComplete.bind(this);
    this.state = {
      films: [],
      focusFilm: null
    };
    this.setFocusFilm = this.setFocusFilm.bind(this);
  }

  setFocusFilm(film){
    this.setState({focusFilm: film});
  }

  makeRequest(url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
  }

  requestComplete(evt) {
    if(evt.target.status !== 200) return;
    const jsonString = evt.target.responseText;
    const films = JSON.parse(jsonString);
    this.setState({
      films: films,
      focusFilm: films[8]
    });
  }

  componentDidMount() {
    const url = "https://netflixroulette.net/api/api.php?actor=John%20Malkovich"
    this.makeRequest(url, this.requestComplete);
  }

  render() {
    return (
      <div>
        <h2>Films Starring John Malkovich</h2>
        <FilmSelector films={this.state.films} selectFilm={this.setFocusFilm}/>
        <FilmDetails film={this.state.focusFilm}/>
      </div>
    );
  }
}

module.exports = FilmContainer;