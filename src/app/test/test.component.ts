import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
// TODO remove this class, also from html menu & routing
export class TestComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit() {
    const user = new Student('Peter');
    user.lastName = 'Patocka';

    this.message = greeter(user);
  }
}


function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

class Student {
  fullName: string;
  personType: PersonType;
  constructor(public firstName: string, public middleInitial: string = '', public lastName: string = '') {
      this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  personType: PersonType;
}

enum PersonType { LEGAL = 1, NATURAL }
