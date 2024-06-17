import { supabase, supabaseAdmin } from "../Config/config.supabase.js";

export default class UserModel {
  static async signUpNewUser(email, password) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error signing up new user: ${error}`);
    }
  }

  static async getAllUsers() {
    try {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers();
      if (error) {
        throw new Error(error.message);
      } else {
        return data.users;
      }
    } catch (error) {
      console.error(`Error fetching users: ${error}`);
    }
  }
}