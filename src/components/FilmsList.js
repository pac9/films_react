import React from 'react';
import Details from './Details.js'

class FilmsList extends React.Component {
  render() {
   const filmDetails = this.props.data.map((details, index) => {
     return (
       <Details title={details.title} key={index}>
         <p>Genre: {details.genre}</p>
         <p>Running Time: {details.runningTime}</p>
         </Details>
     );
   });

    return(
      <div className="films-list">{filmDetails}

      </div>
    );
  }
}

export default FilmsList;
