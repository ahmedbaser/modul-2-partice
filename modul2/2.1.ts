{

// type assertion


let anything : any;

anything = 233;
//(anyhing as anumber)


const KgToGm = (value : string | number) : string | number | undefined => {
  if(typeof value === 'string') {
    const ConvertedValue = parseFloat(value) * 1000
    return `the convertd value is ${ConvertedValue}`
  } 
  if(typeof value === 'number') {
    return value * 1000
  }
}

const result1 = KgToGm(1000) as number;
const result2 = KgToGm("1000") as string;


type  CustomError = {
    message: string;
}

try {

} catch(err) {
    console.log((err as CustomError).message)
}

// interface


// here i use [type] and also user this & {role: string} to add a role property

type User1 = {
    name: string;
    age: number;
   
};

const user1 = {
    name: 'ahmed',
    age: 22,
    role: 'fullstack develper'
}

type UserWithRole1 = User1 & {role: string};


//----------------//-------------------//
// here usign [Interface] to add more property in object 
interface UserWithRole2 extends User2 {
   role: string;

}

interface  User2 {
    name: string;
    age: number;
}

const user: UserWithRole2 = {
    name: 'baser',
    age: 22,
    role: 'full stack developer'
}



// js ---> like a object --> array is like a object// function is like a object


type Roll = number[];
 interface Roll1  {
   [index: number] : number;
 }

 const rollNumber : Roll1 = [1 ,2,3]
// here I used [type] to dynamic this code 
type Add = (num1: number, num2: number) => number

// here I use [interface] to dynamic of the code 
interface Add2 {
    (num1: number, num2: number) : number
}
    //  this is usign by [type]
// const add: Add = (num1, num2) => num1 + num2;

// this is usign by [interface] 
const add: Add2 = (num1, num2) => num1 + num2;


type GenericArray<T> = Array<T>

// const rollNumbers: number[] = [3, 4, 5]
const rollNumbers: GenericArray<number> = [1 , 2, 3]

// const mentors = ['Mr.x', "Mr.y", "Mr.z"];
const mentors1: GenericArray<string> = ['Mr.x', "Mr.y", "Mr.z"]

const boolArray = [true, false, true];

const boolArray1 : GenericArray<boolean> = [true, false, true]


const user3:GenericArray<{name: string;  age: number}> = [
    {
        name: 'ahmed',
        age: 22,
    },
    {
        name: 'baser',
        age: 22,
    },
];

const add1 = (x: number, y:number) => x + y;
add1(30, 50)



type GenericTuple<x, y> = [x, y];

type user21 = {
    name: string;
    age: number;
}
// type user22 = {
//     name: string;
//     age: number;
// }

// const user_nam: GenericTuple<user21, user22> {
//    { name: 'baser',
//      age: 22,
//    },
// {
//     name: 'baser ahmewd',
//     age: 23,
// }
// }

//-------------------//
// here genericarray with [type]
type User = {
    name: string;
    age: number;
}
const user2: GenericArray<User> = [
    {
        name: 'baser',
        age: 22,

    }
]

// here genricArray with interface

interface user4 {
    name: string;
    age: 22;
}

const userName:GenericArray<user4> = [
   {
    name: 'ahmed',
    age: 22,
   }
]

const manush: GenericTuple<string, string> = ['Mr.x','Mr.y'];

const UserWithId:GenericTuple<number, {name:string, email: string}> = [2345,
    {
     name: 'baser',
     email: 'a@gmail.com'   
    }]













}