const Manager = require('../lib/Manager');
const manager = new Manager('15274826', 'Eric', 'Eric@cowork.com', '124');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(manager.name).toEqual('Eric');
      expect(manager.id).toEqual('15274826');
      expect(manager.email).toBe('Eric@cowork.com');
      expect(manager.officeNumber).toBe('124')
    });

    it('Testing the getName() method', () => {
        expect(manager.getName()).toBe('Eric');
    });

    it('Testing the getId() method', () => {
        expect(manager.getId()).toBe('15274826');
    });

    it('Testing the getEmail() method', () => {
        expect(manager.getEmail()).toBe('Eric@cowork.com');
    });

    it('Testing the getRole() method', () => {
        expect(manager.getRole()).toBe('Manager');
    });

});