import React, { Component } from "react";
import BreakingNews from "../Component/BreakNews/BreakingNews.jsx";
import Title from "../Component/BreakNews/BreakingNewsTitle.jsx";
import EnterTitle from "../Component/EntertainNews/EntertainmentNewsTitle.jsx";
import EntertainNews from "../Component/EntertainNews/EntertainmentNews.jsx";
import TechTitle from "../Component/TechnologyNews/TechnologyNewsTitle.jsx";
import TechnologyNews from "../Component/TechnologyNews/TechnologyNews.jsx";
import LatinTitle from "../Component/LatinNews/LatinNewsTitle.jsx";
import LatinoNews from "../Component/LatinNews/LatinNews.jsx";

import { Route, Switch } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      newsdata: [],
      entertainmentdata: [],
      technologydata: [],
      latinodata: []
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
          newsdata: res.articles.slice(0, 9)
        });
      });

    // ENTERTAINMENT NEWS DATA PULL BELOW

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          entertainmentdata: res.articles.slice(0, 9)
        });
      });

    //TECHNOLOGY NEWS DATA PULL BELOW
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          technologydata: res.articles.slice(0, 6)
        });
      });

    //LATINO NEWS DATA PULL BELOW
    fetch(
      "https://newsapi.org/v2/top-headlines?country=mx&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          latinodata: res.articles.slice(0, 6)
        });
      });
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <div className="top-article-section">
              <div className="breakingnews-section-div">
                <div className="title-title">
                  <Title />
                </div>
                <BreakingNews data={this.state.newsdata} />
              </div>
              <div className="entertainnews-section-div">
                <div className="title-title">
                  <EnterTitle />
                </div>
                <EntertainNews data={this.state.entertainmentdata} />
              </div>
              <div className="tech-section">
                <div className="title-title">
                  <TechTitle />
                </div>
                <TechnologyNews data={this.state.technologydata} />
              </div>
              <div className="latin-section">
                <div className="title-title">
                  <LatinTitle />
                </div>
                <LatinoNews data={this.state.latinodata} />
              </div>
            </div>
          </Route>

          {/* THIS SECTION IS THE SEPARATE PAGES ON LINK MENU BAR BELOW */}

          <Route exact path="/entertainment">
            <div className="entertainnews-section-div">
              <div className="title-title">
                <EnterTitle />
              </div>
              <EntertainNews data={this.state.entertainmentdata} />
            </div>
          </Route>

          <Route exact path="/latinonews">
            <div className="latin-section">
              <div className="title-title">
                <LatinTitle />
              </div>
              <LatinoNews data={this.state.latinodata} />
            </div>
          </Route>

          <Route exact path="/businessnews">
            <div className="breakingnews-section-div">
              <div className="title-title">
                <Title />
              </div>
              <BreakingNews data={this.state.newsdata} />
            </div>
          </Route>

          <Route exact path="/technews">
            <div className="tech-section">
              <div className="title-title">
                <TechTitle />
              </div>
              <TechnologyNews data={this.state.technologydata} />
            </div>
          </Route>
        </Switch>
      </>
    );
  }
}

export default Main;
