import { Lyrics } from "@mui/icons-material";

const initialState = {
  selectedListName: "",
  selectedSongsList: [],
  selectedSong: {},
  totalData: [],
  addNewSong: {
    songName: "",
    songNumber: "",
    language: "English",
    lyrics: "",
    chords: false,
    chordsAndLyrics: "",
    youtubeLink: "",
    englishLyrics: "",
  },
};

export const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "SET_TOTAL_SONGS_DATA":
      return {
        ...state,
        totalData: payload,
      };

    case "SET_English_SONGS_DATA":
      return {
        ...state,
        selectedSongsList: payload,
        selectedListName: "English Songs",
      };

    case "SET_Telugu_SONGS_DATA":
      return {
        ...state,
        selectedSongsList: payload,
        selectedListName: "Telugu Songs",
      };
    case "SET_SELECTED_SONG_DATA":
      return {
        ...state,
        selectedSong: payload,
      };
    case "UPDATE_NEW_SONG_DATA":
      return {
        ...state,
        addNewSong: payload,
      };
    case "ADDED_NEW_SONG_TO_FIREBASE_CLOUD":
      return {
        ...state,
        addNewSong: {
          songName: "",
          songNumber: "",
          language: "English",
          lyrics: "",
          chords: false,
          chordsAndLyrics: "",
          youtubeLink: "",
          englishLyrics: "",
        },
      };

    default:
      return { ...state };
  }
};
