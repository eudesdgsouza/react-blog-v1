import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MetaData from "../components/MetaData";
import Loader from "../components/loader/LoaderMain/Loader";
import { useDataContext } from "../context/DataContext";
import ScrollToTop from "../components/ScrollToTop";

const CategoryPosts = () => {
  const { category } = useParams();
  const { getPostByCategory, loading } = useDataContext();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  useEffect(() => {
    setSelectedCategoryData(getPostByCategory(selectedCategory));
  }, [selectedCategory, category]);

  const POST_CATEGORIES = [
    "Agricultura",
    "Negócios",
    "Educação",
    "Entretenimento",
    "Arte",
    "Investimento",
    "Sem categoria",
    "Clima",
    "Todos",
  ];

  return (
    <>
      <HelmetProvider>
        <MetaData title="Categoria do Blog" />
        <ScrollToTop />
        {loading ? (
          <Loader />
        ) : (
          <section>
            <div className="category_select">
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {POST_CATEGORIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            {selectedCategoryData?.length > 0 ? (
              <div className="container posts__container_category">
                {selectedCategoryData?.map(
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
      </HelmetProvider>
    </>
  );
};

export default CategoryPosts;
