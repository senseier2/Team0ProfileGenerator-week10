class Engineer extends Employee {
    constructor(name,id, email,github){
            super(name, id, email)
            this.github = github
    }
    getGitHub() {
        return github
    }
    getRole() {
        return Engineer
    }
} 