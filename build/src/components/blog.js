import React from 'react';
import BodyContent from './bodyContent'
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    };
  }

  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <BodyContent articles={this.state.data.articles} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Blog;