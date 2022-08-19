const Intern = require('../lib/Intern');
const intern = new Intern('9887653', 'Ivan', 'Ivan@cowork.com', 'Bootcamp');

describe('internData', () => {
    it('Collects the employee data values', () => {
      expect(intern.name).toEqual('Ivan');
      expect(intern.id).toEqual('9887653');
      expect(intern.email).toBe('Ivan@cowork.com');
      expect(intern.school).toBe('Bootcamp')
    });

    it('Testing the getName() method', () => {
        expect(intern.getName()).toBe('Ivan');
    });

    it('Testing the getId() method', () => {
        expect(intern.getId()).toBe('9887653');
    });

    it('Testing the getEmail() method', () => {
        expect(intern.getEmail()).toBe('Ivan@cowork.com');
    });

    it('Testing the getSchool() method', () => {
        expect(intern.getSchool()).toBe('Bootcamp');
    });

    it('Testing the getRole() method', () => {
        expect(intern.getRole()).toBe('Intern');
    });

});