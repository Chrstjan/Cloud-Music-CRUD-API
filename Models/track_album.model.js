import { supabase } from "../Config/config.supabase.js";

export default class TrackAlbumModel {
  static async getAllTrackAlbumRel() {
    try {
      const { data, error } = await supabase
        .from("track_album_rel")
        .select("id, albums(title), tracks(title)");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Error fetching album_track relation: ${error}`);
    }
  }
}
