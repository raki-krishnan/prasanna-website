import React, { useEffect, useState } from "react";
import './publications.css';


// class Publication {
//   constructor(name, year, month, day, link, authors) {
//     this.name = name; //string
//     this.year = year; //integer
//     this.month = month; //integer
//     this.day = day; //integer
//     this.link = link; //string (URL)
//     this.authors = authors; //array of strings
//   }

//   getFormattedDate() {
//     return `${this.year}-${String(this.month).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`;
//   }

//   toString() {
//     return `${this.name} by ${this.authors.join(', ')} published on ${this.getFormattedDate()}`;
//   }
// }


const fetchPublications = async () => {
  const apiKey = "3509c0414943ef5f6d0b55294274e8c5b108";
  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=Satpute+Krishnan[Author]&retmode=json&api_key=${apiKey}`;

  try {
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      const pmids = searchData.esearchresult.idlist.join(',');
      console.log("PMIDs:", pmids);

      if (pmids) {
          const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmids}&retmode=json&api_key=${apiKey}`;
          const summaryResponse = await fetch(summaryUrl);
          const summaryData = await summaryResponse.json();

          console.log("Summary data:", summaryData);

          const publications = Object.values(summaryData.result).filter(
              (item) => item.uid
          ).map((item) => ({
              title: item.title,
              authors: item.authors.map((author) => author.name).join(', '),
              source: item.source,
              pubDate: new Date(item.pubdate).toLocaleDateString(),
              link: `https://pubmed.ncbi.nlm.nih.gov/${item.uid}/`,
          }));

          publications.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

          return publications;
      }

      return [];
  } catch (error) {
      console.error("Error fetching publications:", error);
      return [];
  }
};


function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
      const loadPublications = async () => {
          const data = await fetchPublications();
          setPublications(data);
      };

      loadPublications();
  }, []);

  return (
      <div className="page-container">
          <h1>Publications</h1>
          <p>Browse our latest peer-reviewed publications and scientific contributions.</p>

          {publications.length > 0 ? (
              <ul className="publications-list">
                  {publications.map((pub, index) => (
                      <li key={index} className="publication-box">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-title">
                              {pub.title}
                          </a>
                          <p className="publication-authors">By: {pub.authors}</p>
                          <p className="publication-date">Published: {pub.pubDate}</p>
                          <p className="publication-source">Journal: {pub.source}</p>
                      </li>
                  ))}
              </ul>
          ) : (
              <p>Loading publications...</p>
          )}
      </div>
  );
}


export default Publications;
