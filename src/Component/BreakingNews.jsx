import React, { Component } from "react";

class BreakingNews extends Component {
  render() {
    return (
      <>
        {this.props.data ? (
          <div>
            {this.props.data.map(articles => (
              <div className="card">
                <img
                  src={articles.urlToImage}
                  className="card-img-top"
                  alt="?Article Picture"
                />
                <div className="card-body">
                  <h5 className="card-title">{articles.title}</h5>
                  <p className="card-text">{articles.description}</p>
                  <a
                    href="{article.url}"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Article Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>nothing</h1>
        )}
      </>
    );
  }
}

export default BreakingNews;
