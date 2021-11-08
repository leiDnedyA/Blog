import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title : props.title,
        bodyText : props.bodyText,
        date: props.date
    }
  }

  render(){
      return (
          <div className="article">
              <h3>{this.state.title}</h3>
              <p className="articleBody">{this.state.bodyText}</p>
              <h4 className="articleDate">{this.state.date}</h4>
          </div>
      );
  }

}

export default Article;