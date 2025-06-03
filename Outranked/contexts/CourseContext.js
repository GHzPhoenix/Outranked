import React, { createContext, useState } from 'react';
import { courses as initialCourses } from '../data/courses';

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState(initialCourses);

  const addCourse = (course) => {
    const newCourse = {
      id: Date.now().toString(),
      thumbnail: require('../assets/courses/wave-management.jpg'),
      premium: true,
      ...course,
    };
    setCourses((prev) => [...prev, newCourse]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
}