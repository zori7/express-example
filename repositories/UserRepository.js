const storage = require('../storage');

class UserRepository {
    static nextId = storage.users.length + 1;

    getAll() {
        return storage.users;
    }

    getById(id) {
        return storage.users.find(user => user.id === id);
    }

    create(user) {
        const newUser = {
            ...user,
            id: UserRepository.nextId++
        };

        storage.users.push(newUser);

        return newUser;
    }
}

module.exports = UserRepository;
