import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import CreatePost, { createPostAction } from '../components/CreatePost';
import PostList, { postLoader } from '../components/PostList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {path: '/', element: <PostList />, loader: postLoader },
      {path: '/create-post', element: <CreatePost />, action: createPostAction },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
