// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
    }
    speak(){
        `Hello my name is ${this.newName}, I am from ${this.newLocation}.`
    }
}

class Instructor extends Person{
    constructor(instAttrs){
        super(instAttrs);
        this.newSpecialty = instAttrs.speacialty;
        this.newFavLang = instAttrs.favLang;
        this.newCatchPhrase = instAttrs.catchPhrase;
    }
    demo(subject){
        `'Today we are learning about ${subject}'`
    }
    grade(student, subject){
        `'${this.name} receives a perfect score on ${this.subject}'`
    }
}

class Student extends Person{
    constructor(stuAttrs){
        super(stuAttrs);
        this.newPreviousBackground = stuAttrs.previousBackground;
        this.newClassName = stuAttrs.className;
        this.newFavSubject = stuAttrs.favSubject
    }
    listsSubjects(){

    }
    PRAssignment(){
        `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(){
        `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.newGradClassName = pmAttrs.gradClassName;
        this.newFavInstructor = pmAttrs.favInstructor;
    }
    standUp(name, channel){
        `'${this.name} announces to ${this.channel}, @${this.channel} standy times!`
    }
    debugsCode(){
        `'${name} debugs ${student.name}'s code on ${subject}`
    }
}

const studentOne = new Person({
    name: "Joe",
    age: 32,
    location: "New Haven",
    previousBackground: "retail",
    className: "Web Intro",
    favSubject: ["HTML", "CSS", "Java"]
})