import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../assets/images/avatar1.jpg";
import Avatar2 from "../assets/images/avatar8.jpg";
import Avatar3 from "../assets/images/avatar2.jpg";
import Avatar4 from "../assets/images/avatar4.jpg";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Eudes Gomes", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Eudes Gomes", posts: 4 },
  { id: 3, avatar: Avatar3, name: "Eudes Gomes", posts: 5 },
  { id: 4, avatar: Avatar4, name: "Eudes Gomes", posts: 6 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <HelmetProvider>
      <MetaData title="Autores" />
      <section className="authors">
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/post/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`Image of ${id}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Authors;
