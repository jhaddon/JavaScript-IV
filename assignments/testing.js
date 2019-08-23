// CODE here for your Lambda Classes

//Person Class 
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender; 
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
 }
 
 //Instructor Class 
 class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favlanguage = instructorOptions.favlanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
 }   //Instructor
 
 //Student Class
 class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`; //?
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
 }   //Student
 
 //ProjectManager Class 
 class ProjectManager extends Instructor {
    constructor(PmOptions) {
        super(PmOptions);
        this.gradClassName = PmOptions.gradClassName;
        this.favInstructor = PmOptions.className;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
 }// PM
 
 // OBJECTS
 const bilbo = new Person ({
    "name": 'Bilbo',
    "age": 56,
    "location":'Shire',
 });
 const frodo = new Person({
    "name": 'Frodo',
    "age": 27,
    "location": 'Bag End',
 });
 const gandalf = new Person({
    "name": 'Gandalf',
    "age": 83,
    "location": 'Brandywine',
 });
 
 const aragorn = new Instructor({
    "name": 'Aragorn',
    "age": 38,
    "location": 'Rivendell',
    "specialty": 'Redux',
    "favLanguage": 'Python',
    "catchPhrase": 'You shall not pass!',
 });
 const gimli = new Instructor({
    "name": 'Gimli',
    "age": 25,
    "location": 'Gondor',
    "specialty": 'JavaScript',
    "favLanguage": 'French',
    "catchPhrase": 'Is it secret? Is it safe?',
 });
 const legolas = new Instructor({
    "name": 'Legolas',
    "age": 32,
    "location": 'Misty Mountains',
    "specialty": 'Zoom',
    "favLanguage": 'Spanish',
    "catchPhrase": 'One does not simply',
 });
 
 const samwise = new Student({
    "name": 'Samwise',
    "age": 42,
    "location": 'Moria',
    "previousBackground": 'student',
    "className": 'CS10',
    "favSubjects": 'Art',
 });
 
 const merry = new Student({
    "name": 'Merry',
    "age": 33,
    "location": 'Anduin',
    "previousBackground": 'gardener',
    "className": 'CS10',
    "favSubjects": 'Math',
 });
 
 const pippin = new Student({
    "name": 'Pippin',
    "age": 37,
    "location": 'Cirith Ungol',
    "previousBackground": 'cook',
    "className": 'CS10',
    "favSubjects": 'Coding',
 });
 
 const boromir = new ProjectManager({
    "name": 'Boromir',
    "age": 21,
    "location": 'Isengard',
    "specialty": 'Python tutor',
    "favLanguage": 'German',
    "catchPhrase": 'run, you fools!',
    "gradClassName": 'CS5',
    "favInstructor": 'Josh Knell',
 });
 const arwen = new ProjectManager({
    "name": 'Arwen',
    "age": 19,
    "location": 'Lothlorien',
    "specialty": 'JS',
    "favLanguage": 'Italian',
    "catchPhrase": 'And my axe!',
    "gradClassName": 'CS1',
    "favInstructor": 'Britt Hemming',
 });
 const elrond = new ProjectManager({
    "name": 'Elrond',
    "age": 70,
    "location": 'Numenor',
    "specialty": 'Oracle',
    "favLanguage": 'Chinese',
    "catchPhrase": 'My Precious!',
    "gradClassName": 'CS10',
    "favInstructor": 'Dan Frehner',
 });
 
 
 console.log(bilbo.name);
 console.log(frodo.speak());
 legolas.speak();
 console.log(aragorn.demo('Blockchain'));
 console.log(gimli.grade(gandalf,'JavaScript'));
 console.log(gimli.grade(legolas,'Python'));
 
 console.log(samwise.listsSubjects());
 console.log(merry.PRAssignment(frodo, 'CSS'));
 console.log(samwise.sprintChallenge(pippin, 'React'));
 
 console.log(boromir.gradClassName);
 console.log(elrond.standUp('Elrond', 'CS10 Channel'));
 console.log(arwen.debugsCode('Arwen','Samwise','Classes'));