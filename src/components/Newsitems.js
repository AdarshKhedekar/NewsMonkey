import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, source, date} = this.props;
    return (
      <div>
        
        <div className="card my-3" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
            <img className="card-img-top" src={imageUrl?imageUrl:""} alt="..."/>
            <div className="card-body">
                <h5 style={{color: "yellow"}}className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {date}</small></p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-warning">Read more</a>
                
            </div>
            </div>
      </div>
    )
  }
}
