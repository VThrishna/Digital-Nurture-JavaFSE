import React from 'react';

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Bo', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schwarzdenier', content: 'You can install React from npm.' },
];

const BlogDetails = () => {
  return (
    <div>
      <h1>Blog Details</h1>
      {blogs.length > 0 &&
        blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      {blogs.length === 0 && <p>No blogs yet</p>}
    </div>
  );
};

export default BlogDetails;