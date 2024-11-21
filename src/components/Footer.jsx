import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const categories = [
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  return (
    <footer>
      <ul className="footer__categories">
        {categories.map((item, index) => (
          <li key={index}>
            <a href="#" onClick={() => navigate(`/posts/categories/${item}`)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="footer__copyright">
        <small>Todos os Direitos Reservados &copy; Copyright, NexusInfo Blog. </small>
      </div>
    </footer>
  );
};

export default Footer;
