import React from "react";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ course }) => {
  const parts = course.parts;

  return (
    <div>
      <ul>
        {parts.map((currentPart) => (
          <Part
            key={currentPart.id}
            name={currentPart.name}
            exercises={currentPart.exercises}
          />
        ))}
      </ul>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <li>
      {name} {exercises}
    </li>
  );
};

const Total = ({ course }) => {
  const parts = course.parts;
  const sum = parts.reduce(
    (currentSum, currentPart) => currentSum + currentPart.exercises,
    0
  );
  return <h3>total of {sum} exercises</h3>;
};

export default Course;
