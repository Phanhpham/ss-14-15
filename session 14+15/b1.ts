class Student9 {
  id: number;
  name: string;
  enrolledCourses: Course[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.enrolledCourses = [];
  }
  enroll(course: Course) {
    this.enrolledCourses.push(course);
  }
}
class Course {
  title: string;
  instructor: Instructor;
  lessons: Lesson[];
  assessments: string[];

  constructor(title: string, instructor: Instructor) {
    this.title = title;
    this.instructor = instructor;
    this.lessons = [];
    this.assessments = [];
  }
  addLesson(lesson: Lesson) {
    this.lessons.push(lesson);
  }

  addAssessment(assessment: string) {
    this.assessments.push(assessment);
  }
}

class Lesson {
  title: string;
  assignments: string[];

  constructor(title: string, assignments: string[]) {
    this.title = title;
    this.assignments = assignments;
  }
}
class Instructor {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  createCourse(nameCourse: string): Course {
    return new Course(nameCourse, this);
  }
  createLesson(nameLesson: string, assignments: string[]): Lesson {
    return new Lesson(nameLesson, assignments);
  }

  createAssignment(nameAssignment: string): string {
    return nameAssignment;
  }
  createAssessment(test: string): string {
    return test;
  }
}



const instructor = new Instructor(1, "phanh");
const course = instructor.createCourse("English");
const lesson1 = instructor.createLesson("hello", [
  "Assignment 1",
  "Assignment 2",
]);
const lesson2 = instructor.createLesson("age", [
  "Assignment 3",
  "Assignment 4",
]);
const assessment = instructor.createAssessment("The Test");

