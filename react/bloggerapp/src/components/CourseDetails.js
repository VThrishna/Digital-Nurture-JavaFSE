import React from 'react';

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/1/2020' },
];

const CourseDetails = () => {
  let content;

  if (courses.length > 0) {
    content = courses.map((course) => (
      <div key={course.id}>
        <h3>{course.name}</h3>
        <h4>{course.date}</h4>
      </div>
    ));
  } else {
    content = <p>No courses scheduled</p>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      {content}
    </div>
  );
};

export default CourseDetails;