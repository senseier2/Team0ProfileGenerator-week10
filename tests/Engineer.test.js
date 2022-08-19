const Engineer = require('../lib/Engineer');
const engineer = new Engineer('5578932', 'Grayson', 'grayson@cowork.com', 'github');

describe('employeeData', () => {
    it('Collects the employee data values', () => {
      expect(engineer.name).toEqual('Grayson');
      expect(engineer.id).toEqual('5578932');
      expect(engineer.email).toBe('grayson@cowork.com');
      expect(engineer.github).toBe('github')
    });

    it('Testing the getName() method', () => {
        expect(engineer.getName()).toBe('Grayson');
    });

    it('Testing the getId() method', () => {
        expect(engineer.getId()).toBe('5578932');
    });

    it('Testing the getEmail() method', () => {
        expect(engineer.getEmail()).toBe('grayson@cowork.com');
    });

    it('Testing the getGitHub() method', () => {
        expect(engineer.getGitHub()).toBe('github');
    });

    it('Testing the getRole() method', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });

});