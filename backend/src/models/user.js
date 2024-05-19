export class User {
    constructor(username = null, password = null, email = null, category = null) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.category = category;
    }
}
