const Employee = require('../lib/Employee');
const employee = new Employee('Nahian', '8975426', 'nahian@cowork.com');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(employee.name).toEqual('Nahian');
      expect(employee.id).toEqual('8975426');
      expect(employee.email).toBe('nahian@cowork.com');
    });

    it('Testing the getName() method', () => {
        expect(employee.getName()).toBe('Nahian');
    });

    it('Testing the getId() method', () => {
        expect(employee.getId()).toBe('8975426');
    });

    it('Testing the getEmail() method', () => {
        expect(employee.getEmail()).toBe('nahian@cowork.com');
    });

    it('Testing the getRole() method', () => {
        expect(employee.getRole()).toBe('Employee');
    });

});