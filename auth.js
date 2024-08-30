// User Authentication Code

/**
 * Dummy user data (in a real application, this would be stored in a database).
 */
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' }
  ];
  
  /**
   * Function to simulate user login.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {object} - An object with the success status and a message.
   */
  function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  }
  
  /**
   * Function to simulate user registration.
   * @param {string} username - The username to be registered.
   * @param {string} password - The password for the new user.
   * @returns {object} - An object with the success status and a message.
   */
  function register(username, password) {
    if (users.find(user => user.username === username)) {
      return { success: false, message: 'Username already exists' };
    } else {
      users.push({ username, password });
      return { success: true, message: 'Registration successful' };
    }
  }
  
  module.exports = { login, register };
  