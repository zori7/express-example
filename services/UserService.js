class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getAllUsers() {
        return this.userRepository.getAll();
    }

    getUserById(id) {
        return this.userRepository.getById(+id);
    }

    createUser(user) {
        return this.userRepository.create(user);
    }
}

module.exports = UserService;
