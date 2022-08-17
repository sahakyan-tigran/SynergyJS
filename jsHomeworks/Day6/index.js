function Employee(name, salary, birthday, employmentDate) {
    this.name = name;
    this.salary = salary;
    this.birthday = birthday;
    this.employmentDate = employmentDate;

    Employee.prototype.getExperience = function () {
        return new Date().getFullYear() - this.employmentDate.getFullYear();
    }
    Employee.prototype.getExperienceInDays = function () {
        return this.getExperience() * 365;
    }
    Employee.prototype.getAge = function () {
        return new Date().getFullYear() - this.birthday.getFullYear();
    }
    Employee.prototype.getDaysUntilRetirement = function () {
        return (65 - this.getAge()) * 365;
    }
    Employee.prototype[Symbol.toPrimitive] = function (hint) {
        if (hint === "number") {
            return this.salary;
        } else {
            return this.name;
        }
    }
}

let production = {
    name: "Production",
    salarySum: 0,
    monthlyProfit: 100000000,
    monthlySpending: 0,
    employees: [],

    addEmployee(employee) {
        this.employees.push(employee);
        this.salarySum += employee.salary;
        this.monthlySpending += employee.salary;
        this.monthlyProfit -= employee.salary;
    },
    deleteEmployee(employee) {
        let index = this.employees.indexOf(employee);
        this.employees.splice(index, 1);
        this.salarySum -= employee.salary;
        this.monthlySpending -= employee.salary;
        this.monthlyProfit += employee.salary;
    },
    getAvgSalary() {
        return this.salarySum / this.employees.length;
    },

    [Symbol.toPrimitive](hint) {
            if (hint === "number") {
                return this.salarySum;
            } else {
                return this.name;
            }

    }
}

let emp1 = new Employee("Tiko", 200, new Date("2001"),new Date("2018"));
let emp2 = new Employee("Artur", 200, new Date("2001"),new Date("2018"));
let emp3 = new Employee("Mike", 200, new Date("2001"),new Date("2018"));
let emp4 = new Employee("Eva", 200, new Date("2001"),new Date("2018"));


production.addEmployee(emp1);
production.addEmployee(emp2);
production.addEmployee(emp3);
production.addEmployee(emp4);

export {Employee,production};





