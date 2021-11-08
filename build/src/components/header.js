import React from "react";

function Header(props){
    return (
      <div>
        <div id="pageHeader">
          <h1 id="headerText">{props.blogName}</h1>
          <h3 id="headerSubtext">{props.authorName}</h3>
        </div>
        <hr />
      </div>
    );
}

export default Header;