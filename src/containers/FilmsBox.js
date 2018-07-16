import React from "react";
import FilmsList from "../components/FilmsList.js"

class FilmsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        title: "Mamma Mia! Here We Go Again",
        genre: "Musical",
       runningTime: "114 minutes" },
       {
        title: "McQueen",
        genre: "Documentary",
        runningTime: "111 minutes"
       }]
    };
  }

  render() {
    return(
    <div className="films-box">
      <h2>UK Opening This Week</h2>
        <FilmsList data={this.state.data} />

    </div>
  );
  }
}

export default FilmsBox;
