import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div>
      <div className="st0">
        <CourseDetails />
      </div>
      <div className="v1">
        <BookDetails />
      </div>
      <div className="mystyle1">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;