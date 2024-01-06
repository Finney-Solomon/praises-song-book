const initialState = {
  selectedListName: "",
  selectedSongsList: [],
  selectedSong: {},
  totalData: [],
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
  

    default:
      return { ...state };
  }
};
