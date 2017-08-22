import React from 'react';

class FilmDetails extends React.Component {
  render() {
    if (!this.props.film) return null

    return (
    <div>
      <h3>
        Film Title: {this.props.film.show_title}
      </h3>
      <h3>
        Year Released: {this.props.film.release_year}
      </h3>
      <p>
        Summary: {this.props.film.summary}
      </p>
      <img src={this.props.film.poster} />
    </div>  
    );
  }
}

module.exports = FilmDetails;