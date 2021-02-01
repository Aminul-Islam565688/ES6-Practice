// varible licking value in var and not licking in let 
for(var i = 0 ; i < 5 ; i ++){

}
console.log(i);

default perameter in function for get rid of error
function add (num1,num2=20){
    return num1 + num2;
}

let sum = add(15);
console.log(sum);


//writing or declear variable string value without hastel
const firstName = "Aminul";
const lastName = "Islam";
// const fullName = firstName + lastName +"is a good boy";
const fullName2 = `${firstName} ${lastName} is a good boy.`;
console.log(fullName2);

//writing multiple line with this ``;
const multipleLine = `i love you
i need you 
i miss you 
i want marry you`;
console.log(multipleLine);

short way to define a function

const doubleIt = function (num){
    return num * 2;
};
let num2 = doubleIt(6);
console.log(num2);


this new way to define a function 
const doubleIt = num => num*2;
const myNumber = doubleIt(4);
console.log(myNumber);

const add = (num1,num2) => num1 + num2;
const sum = add(20);
console.log(sum);

spread operators ...
const age = [13,34,67,87,99];
const age2 = [25,35,45,55];
const age3 = [30,40,50,60];
const concatedAge = [...age,56,...age2,...age3];
console.log(concatedAge);

const jalim = 450;
const solimUddin = 300;
const dalimMia = 250;
const takaPoisha = [4050,300,590];
// const highest = Math.max(jalim, solimUddin, dalimMia);
const highest = Math.max(...takaPoisha);
console.log(highest);

class / this is like function and we can set perameter in it

class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "khilgoan Govt. Colony High School"
    }
}

const student1 = new Student(01,"Mahi");
const student2 = new Student(02,"Rupa");
console.log(student1,student2); 

inheritance
class Parent{
    constructor(){
        this.fathersName = "Robert Thorn";
    }
}

class Child extends Parent{
    constructor(name){
    super();
    this.name = name;
    }

    getfullName(){
        return `${this.name} ${this.fathersName}`;
    }
}

const child1 = new Child("Babu");
const child2 = new Child("Poka");
console.log(child1.getfullName());

console.log(child1,child2);

object oriented programming core concepts


destructure 

Object
const profile = {name:"rakib",age:22,job:"coding",phone:0168792394};
const {phone,job,name} = profile;
console.log(phone,job,name);

Array
const friends = ["amir Khan", "shahruk Khan", "salman Khan"];
const [first,second] = friends;
console.log(first,...second);

const profile = {
    name:'rakib',
    age:22,
    info:{
        address:'Dhaka',
        phone:098765,
        job:'currently Jobless'
    }
}

const {job,phone} = profile.info;
console.log(job,phone);