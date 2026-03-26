import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  }

  return (<form className="createPost mx-2" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter your User Id here</label>
      <input type="text" className="form-control" id="userId" ref={userIdElement} />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="title" ref={postTitleElement} />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Body</label>
      <textarea rows="4" className="form-control" id="body" ref={postBodyElement} />
    </div>
    <div className="mb-3">
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" className="form-control" id="reactions" ref={reactionsElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input type="text" className="form-control" id="tags" ref={tagsElement} />
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

export default CreatePost;