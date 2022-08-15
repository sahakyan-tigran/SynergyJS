// 1)merge sort

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    let mid = arr.length / 2;
    if (arr.length < 2) {
        return arr;
    }
    let left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(arr));
}

// 2) employee

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
            return salary;
        } else {
            return name;
        }
    }
}

// 3)production

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

let emp2 = new Employee("Sahakyan", 200, new Date("2001"),new Date("2018"));


production.addEmployee(emp2);

export {Employee,production};





