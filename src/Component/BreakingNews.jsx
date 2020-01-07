import React, { Component } from "react";

class BreakingNews extends Component {
constructor(props) {
  super(props)
this._handleData = this._handleData.bind(this);
//console.log(props.data);
}


_handleData(props){
  console.log(props);
}



  render() {
  console.log(this.props)
    return (
    <>
      {
        this.props.data ? 
        <div>
          {this.props.data.map((articles, index) => (
              <ul key={index}>
                <li>Title: {articles.title}</li>
                <li>Source: {articles.source.name}</li>
                <img src={articles.urlToImage} />
                <li>Content: {articles.content}</li>
              </ul>
            ))}
        </div> 
        : 
        <h1>nothing</h1>
      }
    </>
    )
  }
}

export default BreakingNews;
