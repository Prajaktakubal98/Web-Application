import React, { useState } from 'react';

const PostPage = ({ handleLogout }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleEditPost = (index) => {
    // Implement edit post logic here
  };

  const handleUpdatePost = (index, updatedPost) => {
    // Implement update post logic here
  };

  return (
    <div className="page">
      <h1>Post Management</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="post-btns">
              <button onClick={() => handleDeletePost(index)}>Delete</button>
              <button onClick={() => handleEditPost(index)}>Edit</button>
              <button onClick={() => handleUpdatePost(index, post)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
