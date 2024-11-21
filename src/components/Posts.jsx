import React from "react";
import PostItem from "./PostItem";
import { useDataContext } from "../context/DataContext";

const Posts = () => {
  const { loading, data } = useDataContext();

  const reversedBlogs = data && [...data].reverse();

  return (
    <>
      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <section className="posts">
          {data.length > 0 ? (
            <div className="container posts__container">
              {reversedBlogs.map(
                ({ id, thumbnail, category, title, desc, authorID }) => (
                  <PostItem
                    key={id}
                    postID={id}
                    thumbnail={thumbnail}
                    category={category}
                    title={title}
                    description={desc}
                    authorID={authorID}
                  />
                )
              )}
            </div>
          ) : (
            <h2 className="center">Nenhuma postagem encontrada</h2>
          )}
        </section>
      )}
    </>
  );
};
export default Posts;
