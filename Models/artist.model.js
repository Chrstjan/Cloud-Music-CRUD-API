import { supabase } from "../Config/config.supabase.js";

export default class ArtistModel {
  static async getAllArtists() {
    try {
      const { data, error } = await supabase.from("artist").select("id, joined_at, name, description, location_name, country(name)");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching all artists: ${error}`);
    }
  }

  static async getArtistByName(name) {
    try {
      const { data, error } = await supabase
        .from("artist")
        .select(
          "id, joined_at, name, description, location_name, country(name)"
        )
        .eq("name", name)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error getting artist data: ${error}`);
    }
  }

  static async createArtist(formdata) {
    try {
      const { data, error } = await supabase.from("artist").insert([
        {
          name: formdata.name,
          image: formdata.image,
          description: formdata.description,
          country: formdata.country,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating artist: ${error}`);
    }
  }

  static async updateArtist(formdata) {
    try {
      const { data, error } = await supabase
        .from("artist")
        .update([
          {
            name: formdata.name,
            image: formdata.image,
            description: formdata.description,
            country: formdata.country,
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating artist: ${error}`);
    }
  }

  static async deleteArtist(formdata) {
    try {
      let { data, error } = await supabase
        .from("artist")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error deleting artist: ${error}`);
    }
  }
}
