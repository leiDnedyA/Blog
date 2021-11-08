import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
//main page elements
import Navbar from "./components/navbar";
import Header from "./components/header";
//routes
import Blog from "./components/blog";

const blogName = "Blog Name To Be Determined";
const authorName = "Ayden Diel";
const navbarData = [
            { label: "Blog", href: "/blog" },
            { label: "Artowrk", href: "/artwork" },
            { label: "About", href: "/about" }
          ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageIndex : 0
    };

    this.setPageIndex = this.setPageIndex.bind(this);

  }

  setPageIndex(newPageIndex){
    this.setState({currentPageIndex : newPageIndex});
  }

  render() {
    return (
      <div>
        <Header blogName={blogName} authorName={authorName} />
        <Navbar
          currentMenuIndex={this.state.currentPageIndex}
          menuItems={navbarData}
          onChangeHandler={this.setPageIndex}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/artwork" element={<p>Artwork section coming soon!</p>}/>
      <Route path="/about" element={<p>About section coming soon!</p>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
