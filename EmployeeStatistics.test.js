import { EmployeeStatistics, Employee } from './EmployeeStatistics';
import { describe, it, expect } from 'vitest';

describe("Constructor", ()=>{
    it("should throw error if employees is not an array", ()=>{
        expect(()=> new EmployeeStatistics("employees")).toThrowError();
    });
    it("should throw error if employees is empty", ()=>{
        expect(()=> new EmployeeStatistics([])).toThrowError();
    });
    it("should create an instance of EmployeeStatistics", ()=>{
        const employees = [new Employee("Aldár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics).toBeInstanceOf(EmployeeStatistics);
    });
});

describe("getAverageSalary", ()=>{
    it("should return the average salary of all employees", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getAverageSalary()).toEqual(1500);
    });
    it("should return the average salary of all employees (float)", ()=>{
        const employees = [new Employee("Aladár", 40, 1), new Employee("Béla", 30, 2), new Employee("Csongor", 18, 1)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getAverageSalary()).toEqual((1+2+1)/3);
    });
});

describe("getMaxSalary", ()=>{
    it("should return the maximum salary of all employees", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getMaxSalary()).toEqual(2000);
    });
    it("should return the maximum salary of all employees (2)", ()=>{
        const employees = [new Employee("Aladár", 40, 1), new Employee("Béla", 30, 2), new Employee("Csongor", 18, 1)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getMaxSalary()).toEqual(2);
    });
});

describe("getMinSalary", ()=>{
    it("should return the minimum salary of all employees", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getMinSalary()).toEqual(1000);
    });
    it("should return the minumum salary of all employees (2)", ()=>{
        const employees = [new Employee("Aladár", 40, 1), new Employee("Béla", 30, 2), new Employee("Csongor", 18, 1)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getMinSalary()).toEqual(1);
    });
});

describe("getAverageAge", ()=>{
    it("should return the average age of all employees", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getAverageAge()).toEqual(35);
    });
    it("should return the average age of all employees (float)", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000), new Employee("Csongor", 18, 1)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getAverageAge()).toEqual((40+30+18)/3);
    });
});

describe("getHighestPaidEmployee", ()=>{
    it("should return the highest paid employee", ()=>{
        const employees = [new Employee("Aladár", 40, 1000), new Employee("Béla", 30, 2000)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getHighestPaidEmployee()).toEqual("Béla");
    });
    it("should return the highest paid employee (2)", ()=>{
        const employees = [new Employee("Aladár", 40, 1), new Employee("Béla", 30, 2), new Employee("Csongor", 18, 100)];
        const employeeStatistics = new EmployeeStatistics(employees);
        expect(employeeStatistics.getHighestPaidEmployee()).toEqual("Csongor");
    });
});
