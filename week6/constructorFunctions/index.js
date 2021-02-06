// Employee #1 :
function Employee(name, jobTitle, salary, status="fulltime" ){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    
    this.employeeForm = function(){
        return `name: ${name} jobTitle: ${jobTitle} salary: ${salary} status: ${status}`;
    }
}
var dave = new Employee("Dave", "Manager", "$ 3,000", "fullTime" );
console.log(dave.employeeForm());

// Employee #2 :
function Employee(name, jobTitle, salary, status="fulltime" ){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    
    this.employeeForm = function(){
        return `name: ${name} jobTitle: ${jobTitle} salary: ${salary} status: ${status}`;
    }
}
var richard = new Employee("Richard", "Sales", "$ 3,400", "FullTime" );
console.log(richard.employeeForm());

// Employee #3 :
function Employee(name, jobTitle, salary, status="contract" ){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    
    this.employeeForm = function(){
        return `name: ${name} jobTitle: ${jobTitle} salary: ${salary} status: ${status}`;
    }
}
var alexis = new Employee("Alexis", "Contract", "$ 4,000", "Contract" );
console.log(alexis.employeeForm())

// Put Employees into array:

var employees =  ["Dave", "Richard", "Alexis" ];
console.log( employees)

