import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here</label>
        <input type="text" className="form-control" id="userId"
          name="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title"
          name="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Body</label>
        <textarea rows="4" className="form-control" id="body"
          name="body" />
      </div>
      <div className="mb-3">
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="text" className="form-control" id="reactions"
            name="reactions" />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
          <input type="text" className="form-control" id="tags"
            name="tags" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  const { userId, title, body, reactions, tags } = postData;
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      userId: userId,
      body: body,
      tags: tags,
      reactions: reactions,
    }),
  })
    .then(res => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
};

export default CreatePost;