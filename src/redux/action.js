import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getSongs = async (dispatch) => {
    try {
        const songs = collection(db, "songs");
        const data = await getDocs(songs);
        const payload = data.docs.map((doc) => ({ ...doc.data() }));
        dispatch(setTotalSongsData(payload))
    } catch (error) {
        console.error("Error fetching songs: ", error);
    }
};

const setTotalSongsData = (payload) => ({
    type: 'SET_TOTAL_SONGS_DATA',
    payload: payload,
  });

 export const setEnglishSongsData = (payload) => ({
    type: 'SET_English_SONGS_DATA',
    payload: payload,
  });

 export const setTeluguSongsData = (payload) => ({
    type: 'SET_Telugu_SONGS_DATA',
    payload: payload,
  });

  export const setSelectedSongData = (payload) => ({
    type: 'SET_SELECTED_SONG_DATA',
    payload: payload,
  });
  
  