import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getSongs  = () =>  async (dispatch) => {
    try {
        const songs = collection(db, "songs");
        const data = await getDocs(songs);
        const payload = data.docs.map((doc) => ({ ...doc.data() }));
        dispatch(setTotalSongsData(payload))
    } 
    catch (error) {
        console.error("Error fetching songs:", error);
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

  export const updateNewSongData = (payload) => ({
    type: 'UPDATE_NEW_SONG_DATA',
    payload: payload,
  });

  export const addNewSong = (payload) => ({
    type: 'ADDED_NEW_SONG_TO_FIREBASE_CLOUD',
    payload: payload,
  });

  export const addNewSongFireBaseCloud =  (payload) => async (dispatch)=> {
    const songs = collection(db, "songs");
  try {
  
    await addDoc( songs,payload);
  
    dispatch(addNewSong())
  } catch (error) {
    console.error("Error fetching songs: ", error);
  }
  finally{
    dispatch(getSongs())
  }
  };
  
  