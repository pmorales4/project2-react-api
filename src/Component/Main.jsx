import React, { Component } from "react";

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
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
          //PULLS DATA FROM HERE TO CONSOLE. 
        console.log(res);

        this.setState({
          newsdata: res
        });
      });
  }

  render() {
    return (

      <div className="news-articles">
        <h1>Articles from the Web!</h1>
        {this.state.newsdata.map((articles) => (
          <div>
            <h2>{articles.author}</h2>
            {/* <h3>{articles.description}</h3>
            <img src={articles.urlToImage} /> */}
          </div>
        ))}
      </div>
      )
  }
}

export default Main;
