import React, { Component } from "react";
import BreakingNews from "./BreakingNews.jsx";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      newsdata: []
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335";

    fetch(url)
      .then(res => res.json())
      .then(res => {
        //PULLS DATA FROM HERE TO CONSOLE.
       

        this.setState({
          newsdata: res.articles
        });
      });
  }

  render() {
    return (
      <div className="news-articles">
        <>
          <h1>Articles from the Web!</h1>
          <BreakingNews data={this.state.newsdata}/>
        </>
      </div>
    );
  }
}

export default Main;
