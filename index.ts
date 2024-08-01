class School {
  directions: string[] = []; //['direction1', 'direction2', 'direction3']
  //тяжело конеретно сказать какой тип будет directions без контекста, допустим строка

  addDirection(direction: string) {
    this.directions.push(direction);
  }
}

class Direction {
  levels: number[] = [];
  // тоже самое и тут, допустим левелы будут [1, 2, 3,...]

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: number) {
    this.levels.push(level);
  }
}

class Level {
  groups: string[] = []; //['group1', 'group2', 'group3']

  constructor(name: string, program: string) {
    this.name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: string) {
    this.groups.push(group);
  }
}

class Group {
  _students: string[] = []; // [Andriy, Yasmin, Tova]

  get students(): string[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string) {
    this._students.push(student);
  }

  showPerformance(): string[] {
    const sortedStudents: string[] = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating() // ну вообще не стринг нихуя, но в логику не вдаюсь)))
    );

    return sortedStudents;
  }
}

class Student {
  grades = {}; //))))
  attendance: boolean[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number) {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean) {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades); //array

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}