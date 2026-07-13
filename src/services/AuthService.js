import users from "../data/users";

const AuthService = {

  login(username, password) {

    const user = users.find(
      user =>
        user.username === username &&
        user.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid username or password."
      };
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    return {
      success: true,
      user
    };
  },

  logout() {
    localStorage.removeItem("currentUser");
  },

  getCurrentUser() {
    return JSON.parse(
      localStorage.getItem("currentUser")
    );
  }

};

export default AuthService;