import React, { Component } from "react";
import BreakingNews from "../Component/BreakNews/BreakingNews.jsx";
import Title from "../Component/BreakNews/BreakingNewsTitle.jsx";
import EnterTitle from "../Component/EntertainNews/EntertainmentNewsTitle.jsx";
import EntertainNews from "../Component/EntertainNews/EntertainmentNews.jsx";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      newsdata: [],
      entertainmentdata: []
    };
  }

  componentDidMount() {
    // BREAKING NEWS TOP HEADLINE NEWS DATA PULL BELOW
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335";

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          newsdata: res.articles
        });
      });

    // ENTERTAINMENT NEWS DATA PULL BELOW

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          entertainmentdata: res.articles
        });
      });
  }

  render() {
    return (
      <div className="news-articles">
        <>
          <div className="top-article-section">
            <div className="breakingnews-section-div">
              <Title />
              <BreakingNews data={this.state.newsdata} />
            </div>
            <div className="entertainnews-section-div">
              <EnterTitle />
              <EntertainNews data={this.state.entertainmentdata} />
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Main;
