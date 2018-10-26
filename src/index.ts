const name: string = "이동근",
  age: number = 27,
  gender: string = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}.`;
}

console.log(sayHi(name, age, gender));

export {};