import React from "react";
import Article from "./article.js";

class BodyContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articleList: this.props.articles
        }
        this.articleElements = this.state.articleList.map((value, index)=>{
            return <Article title={value.title} bodyText={value.bodyText} date={value.date} key={index}/>
        })
    }

    render(){
        return (
          <div className="bodyContent">
            {this.articleElements}
          </div>
        );
    }
}

export default BodyContent;