import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { toBase64 } from "../utils/toBase64";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const POST_CATEGORIES = [
    "Agricultura",
    "Negócios",
    "Educação",
    "Entretenimento",
    "Arte",
    "Investimento",
    "Sem Categoria",
    "Clima",
  ];

  const { createPost, data } = useDataContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Agriculture");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [post, setPost] = useState({
    id: "",
    thumbnail: "",
    category: "",
    title: "",
    desc: "",
    authorID: "",
  });
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await toBase64(file);
      setThumbnail(base64Image);
      setImageFileName(file.name);
    }
  };
  const dataId = data.map((item, index) => item.id);

  const random = () => {
    let uniqueID;
    const randomNum = Math.floor(Math.random() * 10000);
    if (!dataId.includes(randomNum)) {
      uniqueID = randomNum;
    }
    return uniqueID;
  };

  useEffect(() => {
    setPost({
      id: random(),
      thumbnail: thumbnail,
      category: category,
      title: title,
      desc: description,
      authorID: "50",
    });
  }, [id, thumbnail, category, title, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.title === "" || post.desc === "") {
      toast.error("O título ou a descrição não devem estar vazios");
    } else {
      createPost(post);
      navigate("/");
      toast.success("Postagem criada");
    }
  };
  return (
    <HelmetProvider>
      <section className="create_post">
        <MetaData title="Criar Postagem" />
        <div className="container">
          <h2>Criar Postagem</h2>
          <form className="form create_post__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            {thumbnail && (
              <img
                className="create__post_thumbnail"
                src={thumbnail}
                alt="thumbnail"
              />
            )}
            {imageFileName && <span>{imageFileName}</span>}

            <input type="file" name="thumbnail" onChange={handleImageUpload} />
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {POST_CATEGORIES.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <ReactQuill
              modules={modules}
              formats={formats}
              value={description}
              onChange={(e) => setDescription(e)}
            />
            <button type="submit" className="btn primary">
              Postar
            </button>
          </form>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default CreatePost;
