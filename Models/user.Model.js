import { supabase, supabaseAdmin } from "../Config/config.supabase.js";

export default class UserModel {
  static async signUpNewUser(formdata) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formdata.email,
        password: formdata.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      console.error(`Error signing up new user: ${error}`);
      throw error; // Ensure the error is propagated to the caller
    }
  }

  static async signInWithEmail(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error signing in user: ${error}`);
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

  static async updateUserRole(userId, role) {
    try {
      const { data, error } = await supabaseAdmin
        .from("users")
        .update({ role: role })
        .eq("id", userId);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating user role: ${error}`);
      throw error; // Ensure the error is propagated to the caller
    }
  }
}
