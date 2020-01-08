import React, { Component } from "react";

class EntertainmentNews extends Component {
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
                  <h5 className="list-group-item">{articles.author}</h5>

                  <a
                    href={articles.url}
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
          <h1></h1>
        )}
      </>
    );
  }
}

export default EntertainmentNews;