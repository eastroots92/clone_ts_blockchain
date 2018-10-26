class Human {
  private name: string;
  private age: number;
  private gender: string;
  constructor(name: string,
    age: number,
    gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    };
  get getName(): string {
    return this.name;
  }
  get getAge(): number {
    return this.age;
  }
  get getGender(): string {
    return this.gender;
  }
}

const myInfo = new Human("동근", 27, "male");

const sayHi = (info: Human): string => {
  return `Hello ${info.getName}, you are ${info.getAge}, you are a ${info.getGender}.`;
}

console.log(sayHi(myInfo));

export {};