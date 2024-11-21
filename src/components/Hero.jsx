import React from "react";
import { useDataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { stripHtml } from "../utils/stripHtml";

const Hero = () => {
  const { data } = useDataContext();
  const mainBlog = data && data[data.length - 1];

  return (
    <div className="hero">
      <div className="">
        <div className="hero__blogs_container container">
          <div className="hero__blogs">
            <div className="hero__main_blog">
              <div className="hero__main_blog_image">
                <img src={mainBlog.thumbnail} alt="" />
              </div>
              <div className="hero__main_blog_text">
                <h3>{mainBlog.title}</h3>
                <p>{stripHtml(mainBlog.desc)}</p>
                <Link to={`/posts/${mainBlog.id}`}>read more...</Link>
              </div>
            </div>
            <div className="hero__sub_blogs">
              {data &&
                data.slice(0, 5).map((item, index) => (
                  <div className="hero__sub_blog" key={index}>
                    <div className="hero__blog_image ">
                      <img src={item.thumbnail} alt="hero-blog-image" />
                    </div>
                    <div className="hero__blog_text">
                      <Link to={`/posts/${item.id}`}>
                        <h3>{item.title}</h3>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
