// 1 Variable Declaration

/* const name="";
let id="";
 */
// Arrow Function
/* function getEmployeeName(){

}
*/

const f_name=()=>{
    console.log("hello javaScript");

}
console.log(f_name());

// spread operator

const num1= [1,3,4,5];
const num2=[4,7,8,1,...num1];

console.log(num2);

const emp1={
    name: "emp1",
    id: 1,
}
const emp={
    ...emp1
}

console.log(emp);

// Multiline string

const one="one";
const statemat = `This is 
the simple 
statement ${one}`;

console.log(statemat);


// Destructuring

const employee={
    name: "john",
    id:1234,
    phone:99999999,
    age:22,
    addres:"Pune",
};
const employee1={
    name:"Abc",
    fax:12344,
}

const {addres,name,id,age}=employee;
const {name:empname}=employee1;

console.log("\n"  +age);
console.log("Employee Addres", employee1);


// Array Distructure

const stu=["aman",1,"Pune"];
const [val1,val3,val2]=stu

console.log(val3);


//Rest Operator

const getEmployee =(id, name, ...rest)=>{
    //Type of the rest will be an array

    if(rest.length > 0){
        for(let i=0;i<=rest.length;++i){
            console.log(rest[i]);
        }
    }
}

getEmployee(1123,"Aman",24,"pune");

//Default Prameters

const setEmpId = (id=0) =>{

    console.log("ID",id);
}
setEmpId();

// Async / Await

const getEmpData = async () =>{
    const response = await getEmpDataApi();
    console.log("response", response);

}

//Try /Catch
try{
    //safe statement
}
catch{
    // handling errors
}
finally{
    //this will also execute
}

//Class
class Employee extends ParenteEmployee{
    constructor(){
        console.log("this is constructor");
    }
    getEmployee(){
        return "Employee"
    }
}

const emp = new Employee();
console.log(emp123.getEmployee());