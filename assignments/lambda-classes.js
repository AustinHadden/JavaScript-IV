// CODE here for your Lambda Classes

class Person {
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(stats){
        super(stats);
        this.specialty = stats.specialty;
        this.favLanguage = stats.favLanguage;
        this.catchPhrase = stats.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(stats){
        super(stats);
        this.previousBackground = stats.previousBackground;
        this.className = stats.className;
        this.favSubjects = stats.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);       
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor{
    constructor(stats){
        super(stats);
        this.gradClassName = stats.gradClassName;
        this.favInstructor = stats.favInstructor;
    }
    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bob = new Instructor({
    name: 'Bob',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `That's the way the cookie crumbles`
  });

  const bill = new Student({
    name: 'Bill',
    location: 'Bedrock',
    age: 24,
    previousBackground: 'Pizza Salesmen',
    className: 'CS210',
    favSubjects: ['HTML', 'CSS', 'C++']
  });

  const jules = new Student({
      name: 'Jules',
      location: 'Bedrock',
      age: 25,
      previousBackground: 'Lawyer',
      className: 'CS237',
      favSubjects: ['HTML', 'React', 'SAS']
  });

  const penny = new ProjectManagers({
      name: 'Penny',
      location: 'Underworld',
      age: 28,
      gradClassName: 'CS2',
      favInstructor: 'Fred'
  });

  const elliot = new ProjectManagers({
      name: 'Elliot',
      location: 'Fillory',
      age: 29,
      gradClassName: 'CS1',
      favInstructor: 'Dean Fog'
  });

  fred.speak();
  bob.demo('CS210');
  fred.grade(jules, 'CS237');
  jules.listsSubjects();
  bill.PRAssignment('CS210');
  jules.sprintChallenge('CS237');
  penny.standup('web24');
  elliot.debugsCode(jules, 'CS237');
