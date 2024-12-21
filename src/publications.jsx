import React from 'react';
import './publications.css';

class Publication {
  constructor(name, year, month, day, link, authors) {
    this.name = name; //string
    this.year = year; //integer
    this.month = month; //integer
    this.day = day; //integer
    this.link = link; //string (URL)
    this.authors = authors; //array of strings
  }

  getFormattedDate() {
    return `${this.year}-${String(this.month).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`;
  }

  toString() {
    return `${this.name} by ${this.authors.join(', ')} published on ${this.getFormattedDate()}`;
  }
}

function Publications() {
    
    const p1 = new Publication('Very Cool Paper 1', 2023, 5, 10, '/', ['Prasanna Krishnan', 'Mukti', 'Uma']);
    const p2 = new Publication('Very Cool Paper 2', 2022, 8, 15, '/', ['Prasanna Krishnan', 'Meera']);
    const p3 = new Publication('Very Cool Paper 3', 2021, 8, 5, '/', ['Prasanna Krishnan', 'Meera']);
    const p4 = new Publication('Very Cool Paper 4', 2019, 6, 22, '/', ['Prasanna Krishnan', 'Uma']);
    const publications = [p1, p2, p3, p4];

    return (
        <div className="page-container">
          <h1>Publications</h1>
          <p>Browse our latest peer-reviewed publications and scientific contributions.</p>
    
          <div className="publications-list">
            {publications.map((publication, index) => (
              <div className="publication-box" key={index}>
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                  {publication.name}
                </a>
                <p className="publication-authors">By: {publication.authors.join(', ')}</p>
                <p className="publication-date">Date: {publication.getFormattedDate()}</p>
              </div>
            ))}
          </div>
        </div>
    );
}
    

export default Publications;
