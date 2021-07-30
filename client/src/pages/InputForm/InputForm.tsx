import { Link, useHistory, useLocation } from "react-router-dom";
import { createPost, getPosts, updatePost } from "../../actions/posts";
import { useEffect, useState } from "react";

import { IoCaretBackOutline } from "react-icons/io5";
import MDEditor from "@uiw/react-md-editor";
import classes from "./InputForm.module.scss";
import { useDispatch } from "react-redux";

interface Props {
  title: string;
  tags: string;
  message?: string;
}

const InputForm = (props: Props) => {
  let blog: any = useLocation().state;
  const history: any = useHistory();
  const [postData, setPostData] = useState({
    title: "",
    tags: "",
    message: "",
  });
  const [editing, setEditing] = useState(true);

  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                        NOTE handling submit request                       */
  /* -------------------------------------------------------------------------- */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (blog._id) {
      if (window.confirm("Are you sure you want to update?")) {
        dispatch(updatePost(blog._id, postData));
        history.push(`/post/${blog._id}`, {
          ...blog,
          title: postData.title,
          tags: postData.tags,
          message: postData.message,
        });
      }
    } else {
      if (window.confirm("Are you sure you want to create the post?")) {
        dispatch(createPost(postData));
        history.push("/");
      }
    }
    dispatch(getPosts());
    setPostData({ title: "", tags: "", message: "" });
  };

  /* -------------------------------------------------------------------------- */
  /*                 NOTE toggling view between edit and preview                */
  /* -------------------------------------------------------------------------- */
  const toggleView = () => {
    setEditing(!editing);
  };

  useEffect(() => {
    if (blog) {
      setPostData({
        title: blog.title,
        tags: blog.tags,
        message: blog.message,
      });
    }
    console.log(blog);
  }, [blog]);

  return (
    <div className={classes.container}>
      {" "}
      {/* *container starts */}
      <div className={classes.header}>
        <div className={classes.text}>
          <Link to={"/"} className={classes.hLink}>
            <IoCaretBackOutline />
            Home
          </Link>
        </div>
        <div className={classes.switcher}>
          <button
            type="button"
            className={`${classes.btn} ${editing ? `${classes.active}` : ""}`}
            onClick={() => toggleView()}
          >
            Edit
          </button>
          <button
            type="button"
            className={`${classes.btn} ${!editing ? `${classes.active}` : ""}`}
            onClick={() => toggleView()}
          >
            Preview
          </button>
        </div>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* title */}
        <div className={classes.formGroup}>
          <input
            autoComplete="off"
            type="text"
            name="title"
            placeholder="Enter title*"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            required
          />
        </div>

        {/* tags */}
        <div className={classes.formGroup}>
          <input
            autoComplete="off"
            type="text"
            name="tags"
            placeholder="Enter tags [tag1 tag2]"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            required
          />
        </div>

        {/* content */}
        <div className={`${classes.markdown}`}>
          <textarea
            autoComplete="off"
            className={classes.textarea}
            style={{ display: editing ? "block" : "none" }}
            placeholder="Enter text"
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            value={postData.message}
          />
          <MDEditor.Markdown
            source={postData.message}
            className={`${editing ? classes.editorPrev : classes.markdownPrev}`}
          />
        </div>

        {/*  btn */}
        <div className={classes.formGroup}>
          <input
            type="submit"
            className={`${classes.submitBtn} ${
              blog ? classes.updateBtn : classes.createBtn
            }`}
            value={blog ? "Update Post" : "Create Post"}
          />
        </div>
      </form>
      {/* container ends */}
    </div>
  );
};

export default InputForm;
