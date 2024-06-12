import { supabase } from "../Config/config.supabase.js";

export default class songModel {
  static async getAllTracks() {
    try {
      const { data, error } = await supabase.from("tracks").select("id, artist(name), title, image, created_at, updated_at, released_by, released_at, music_genres(name), track");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching all songs: ${error}`);
    }
  }

  static async getTrackByName(name) {
    try {
      const { data, error } = await supabase
        .from("tracks")
        .select("id, artist(name), title, image, created_at, updated_at, released_by, released_at, music_genres(name), track")
        .eq("name", name)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching song: ${error}`);
    }
  }

  static async createTrack(formdata) {
    try {
      const { data, error } = await supabase.from("tracks").insert([
        {
          artist_id: formdata.artist_id,
          title: formdata.title,
          image: formdata.image,
          created_at: formdata.created_at,
          updated_at: formdata.updated_at,
          released_by: formdata.released_by,
          released_at: formdata.released_at,
          song_genre: formdata.song_genre,
          track: formdata.track
        },
      ]);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error creating song: ${error}`);
    }
  }

  static async updateTrack(formdata) {
    try {
      const { data, error } = await supabase
        .from("tracks")
        .update([
          {
            id: formdata.id,
            artist_id: formdata.artist_id,
            title: formdata.title,
            image: formdata.image,
            created_at: formdata.created_at,
            updated_at: formdata.updated_at,
            released_by: formdata.released_by,
            released_at: formdata.released_at,
            song_genre: formdata.song_genre,
            track: formdata.track
          },
        ])
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error updating track: ${error}`);
    }
  }

  static async deleteTrack(formdata) {
    try {
      const { data, error } = await supabase
        .from("tracks")
        .delete()
        .eq("id", formdata.id);
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error deleting track: ${error}`);
    }
  }
}
