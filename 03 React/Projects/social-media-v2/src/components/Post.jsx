import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card postCard">
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {deletePost(post.id)}}
          >
            <MdDelete />
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary mx-1">
            {tag}
          </span>
        ))}
        <div class="alert alert-success mt-3" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </div>
  );
}

export default Post;