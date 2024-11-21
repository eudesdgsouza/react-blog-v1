import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader/LoaderMain/Loader";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useDataContext } from "../context/DataContext";

const MyPosts = () => {
  const { myPosts, loading } = useDataContext();
  return (
    <>
      <HelmetProvider>
        <MetaData title="Minhas Postagens" />
        {loading ? (
          <Loader />
        ) : (
          <section className="dashboard">
            {myPosts.length ? (
              <div className="container dashboard__container">
                {myPosts.map((post, index) => {
                  return (
                    <article key={index} className="dashboard__post">
                      <div className="dashboard_post__info">
                        <div className="dashboard_post__thumbnail">
                          <img src={post.thumbnail} alt="" />
                        </div>
                        <h5>{post.title}</h5>
                      </div>
                      <div className="dashboard_post__actions">
                        <Link
                          to={`/posts/${post.id}`}
                          style={{ margin: "auto", fontSize: "0.9rem" }}
                        >
                          Ver
                        </Link>
                        <Link
                          to={`/posts/${post.id}/edit`}
                          className="btn primary sm"
                        >
                          Editar
                        </Link>
                        <Link
                          to={`/posts/${post.id}`}
                          className="btn danger sm"
                        >
                          Deletar
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h2 style={{ textAlign: "center" }}>
                Você ainda não fez nenhuma postagem.
              </h2>
            )}
          </section>
        )}
      </HelmetProvider>
    </>
  );
};

export default MyPosts;
