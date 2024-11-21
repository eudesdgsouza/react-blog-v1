import { createContext, useState, useEffect, useContext } from "react";
import { DUMMY_POSTS } from "../data";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const getLocalStorageData = localStorage.getItem("blogData");
  
  const [data, setData] = useState(
    getLocalStorageData ? JSON.parse(getLocalStorageData) : DUMMY_POSTS
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
    localStorage.setItem("blogData", JSON.stringify(data));
  }, [data]);

  const getPostDetails = (id) =>
    data.find((item, index) => {
      return item.id === parseInt(id);
    });

  const createPost = (post) => {
    const newPost = post;
    setData([...data, newPost]);
  };

  const editPost = (updatedPost) => {
    setData(
      data.map((post) =>
        post.id === parseInt(updatedPost.id) ? updatedPost : post
      )
    );
  };
  const deletePost = (id) => {
    setData(data.filter((post) => post.id !== parseInt(id)));
  };
  const getPostByCategory = (category) => {
    let categorySelected = null;
    categorySelected =
      category === "All"
        ? data
        : data.filter((item) => item.category === category);
    return categorySelected;
  };
  const myPosts = data.filter((item) => item.authorID === "50");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        myPosts,
        loading,
        editPost,
        createPost,
        getPostDetails,
        getPostByCategory,
        deletePost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("Context must use within a provider");
  }
  return context;
}
