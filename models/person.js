class person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `hello, ${this.name}`;
  }
}

// const p=new person("barak")
// console.log(p)


export default person;