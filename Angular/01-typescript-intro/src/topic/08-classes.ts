
export class Person{
    //public name: string;
    //private adress: string;

    constructor(
        public name: string,
        private adress: string = "No address"
    ){}

}

const ironman = new Person('Ironman', 'New York');

console.log(ironman);