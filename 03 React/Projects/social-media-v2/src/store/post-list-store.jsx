import { useCallback, useMemo } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addInitialPosts: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }, [dispatchPostList]);

  const value = useMemo(() => {
    return {
      postList,
      addPost,
      addInitialPosts,
      deletePost,
    };
  }, [postList, addPost, addInitialPosts, deletePost]);

  return <PostList.Provider value={
    { postList, addPost, addInitialPosts, deletePost }
  }>
    {children}
  </PostList.Provider>;
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho bhai",
//     body: "4 saal ki masti k baad bhi ho gaye hai paas. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;