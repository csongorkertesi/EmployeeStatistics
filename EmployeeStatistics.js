export class Employee {
    constructor(name, age, salary) {
        this.name = name;
        if (typeof age != 'number' || age < 0) {
            throw new Error('Hibás paraméter: age');
        }
        this.age = age;
        if (typeof salary != 'number' || salary < 0) {
            throw new Error('Hibás paraméter: salary');
        }
        this.salary = salary;
    }
}

export class EmployeeStatistics {
    constructor(employees) {
        if (typeof employees != 'object' || !Array.isArray(employees) || employees.length == 0) {
            throw new Error('Hibás paraméter: employees');
        }
        this.employees = employees;
    }

    getAverageSalary() {
        let totalSalary = 0;
        for (let employee of this.employees) {
            totalSalary += employee.salary;
        }
        return totalSalary / this.employees.length;
    }

    getMaxSalary() {
        let maxSalary = 0;
        for (let employee of this.employees) {
            if (employee.salary > maxSalary) {
                maxSalary = employee.salary;
            }
        }
        return maxSalary;
    }

    getMinSalary() {
        let minSalary = this.employees[0].salary;
        for (let employee of this.employees) {
            if (employee.salary < minSalary) {
                minSalary = employee.salary;
            }
        }
        return minSalary;
    }

    getAverageAge() {
        let totalAge = 0;
        for (let employee of this.employees) {
            totalAge += employee.age;
        }
        return totalAge / this.employees.length;
    }

    getHighestPaidEmployee() {
        let highestPaidEmployee = this.employees[0];
        for (let employee of this.employees) {
            if (employee.salary > highestPaidEmployee.salary) {
                highestPaidEmployee = employee;
            }
        }
        return highestPaidEmployee.name;
    }
}
