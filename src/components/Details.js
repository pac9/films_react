import React from "react";

class Details extends React.Component {
  render() {
    return (
      <div className="details">
        <h4 className="film-title">{this.props.title}</h4>
      {this.props.children}
      </div>
    );
  }
}

export default Details;
