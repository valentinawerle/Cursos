
export class Person{
    //public name: string;
    //private adress: string;

    constructor(
        public name: string,
        private adress: string = "No address"
    ){}

}

//export class Hero extends Person{
  //  constructor(
    //    public alterEgo: string,
      //  public age: number,
        //public realName: string,
    //) {
     //   super(realName, 'New York');
   // }
//}

export class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
    }
}
const tony = new Person('Tony', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);




