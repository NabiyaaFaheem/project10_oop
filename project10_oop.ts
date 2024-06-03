import inquirer from "inquirer";
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

function createPerson(): void {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:'
        },
        {
            type: 'number',
            name: 'age',
            message: 'Enter your age:'
        }
    ]).then(answers => {
        const { name, age } = answers;
        const person = new Person(name, age);
        person.introduce();
    });
}

createPerson();