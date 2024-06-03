import { supabase } from "../Config/config.supabase.js";

export default class AlbumModel {
  static async getAllAlbums() {
    try {
      const { data, error } = await supabase.from("albums").select("*");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching albums: ${error}`);
    }
  }

  static async getAlbumByName() {
    try {
      const { data, error } = await supabase
        .from("albums")
        .select("*")
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching Album: ${error}`);
    }
  }

  static async CreateAlbum(formdata) {
    try {
      const { data, error } = await supabase.from("albums").insert([
        {
          artist_id: formdata.artist_id,
          title: formdata.title,
          image: formdata.image,
          description: formdata.description,
          created_at: formdata.created_at,
          updated_at: formdata.updated_at,
          release_date: formdata.release_date,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating album: ${error}`);
    }
  }

  static async updateAlbum(formdata) {
    try {
      const { data, error } = await supabase
        .from("albums")
        .insert([
          {
            id: formdata.id,
            artist_id: formdata.artist_id,
            title: formdata.title,
            image: formdata.image,
            description: formdata.description,
            created_at: formdata.created_at,
            updated_at: formdata.updated_at,
            release_date: formdata.release_date,
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating album: ${error}`);
    }
  }

  static async deleteAlbum(formdata) {
    try {
      const { data, error } = await supabase
        .from("albums")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error deleting album: ${error}`);
    }
  }
}
