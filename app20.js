var john={
    firstname:"john",
    lastname:"doe",
};

var person={
    firstname:"dummy",
    lastname:"dummy",
    getfullname:function(){
        return this.firstname +" "+ this.lastname;
    }
};

console.log(john.firstname);

var john=Object.create(person) // to create objects in javascript
console.log(john.getfullname());
console.log(john.firstname);

// var person = {
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullname: function () {
//       return this.firstname + ' ' + this.lastname;
//     },
//   };
  
//   var john = {
//     firstname: 'John',
//     lastname: 'Doe',
//   };
  
//   // you should never do this
//   john.__proto__ = person;
//   console.log(john.getFullname());
  
//   // let us look at the correct way
//   // to create objects in javascript
  
//   var johnc = Object.create(person);
//   johnc.firstname = 'Max';
//   johnc.lastname = 'Will';
//   console.log(johnc.getFullname());
//   console.log(johnc);