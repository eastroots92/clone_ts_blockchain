interface Human {
  name: string,
  age: number,
  gender: string
}

const person = {
  name: "이동근",
  age: 27,
  gender: "male"
}

const sayHi = (personInfo: Human): string => {
  return `Hello ${personInfo.name}, you are ${personInfo.age}, you are a ${personInfo.gender}.`;
}

console.log(sayHi(person));

export {};