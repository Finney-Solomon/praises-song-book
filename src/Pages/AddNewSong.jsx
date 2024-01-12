import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewSongFireBaseCloud, updateNewSongData } from "../redux/action";

const language = [
  {
    value: "English",
    label: "English",
  },
  {
    value: "Telugu",
    label: "Telugu",
  },
  {
    value: "Tamil",
    label: "Tamil",
  },
  {
    value: "Hindi",
    label: "Hindi",
  },
];

export const AddNewSong = () => {
  const dispatch = useDispatch();

  const addNewSongData = useSelector((state) => state?.addNewSong);
  const totalData = useSelector((state) => state?.totalData);
  const [formState, setFormState] = React.useState(addNewSongData);
  
 
  
  const handleChange = (event) => {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value, });
    if (event.target.type === "checkbox")
      setFormState({ ...formState, [event.target.name]: event.target.checked });
    dispatch(updateNewSongData(formState));
  };

 

  const handleSubmit = (event) => {
    // event.preventDefault();
   
    const lyricsWithBreakTag = addNewSongData.lyrics.replace(/\n/g, "<br>");
    const englishLyricsWithBreakTag = addNewSongData.englishLyrics.replace(/\n/g, "<br>");
    
    const chordsAndLyricsWithBreakTag = (lyricsString)=> {
  // Split the lyrics into an array of lines
  const lyricsArray = lyricsString.split('\n');

  let formattedLyrics = "";

  for (let line of lyricsArray) {
    formattedLyrics += line.trim() + "<br>\n";
  }

  return formattedLyrics;
  
    }

    const chordsAndLyrics=chordsAndLyricsWithBreakTag(addNewSongData?.chordsAndLyrics)
    const payload={
      ...formState,songNumber:totalData?.length + 1,
      lyrics:lyricsWithBreakTag,
      englishLyrics : englishLyricsWithBreakTag,
      chordsAndLyrics : chordsAndLyrics,
    }
    console.log(payload,"check data")
    dispatch(addNewSongFireBaseCloud
      (payload));
  
  };

  return (
    < >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          margin: "auto",
          backgroundColor: "#f5f5f5e8",
          padding: "2em",
          marginTop: "2em",
          borderRadius: "1em",
        }}
      >
        <br />
        <TextField
          id="standard-basic"
          label="Song Title"
          name="songName"
          variant="outlined"
          onChange={handleChange}
          value={formState.songName}
        />
        <br />
        <TextField
          id="language"
          select
          label="Select"
          defaultValue="English"
          helperText="Please select Language"
          name="language"
          onChange={handleChange}
          value={formState.language}
        >
          {language.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Song Lyrics"
          name="lyrics"
          multiline
          rows={8}
          helperText="Paste the Song Lyrics"
          onChange={handleChange}
          value={formState.lyrics}
        />
        {formState?.language === "English" ? (
          <></>
        ) : (
          <FormControlLabel
            name="checkAnotherLyrics"
            onChange={handleChange}
            control={<Checkbox checked={formState.checkAnotherLyrics} />}
            label="Lyrics avaliable in English"
          />
        )}
          {formState?.checkAnotherLyrics === true ? (
           <TextField
           id="outlined-multiline-static"
           label="Song Lyrics in English"
           name="chordsAndLyrics"
           multiline
           rows={8}
           helperText="Paste the Song Lyrics in English"
           onChange={handleChange}
           value={formState.chordsAndLyrics}
         />
        ) : (
          <></>
        )}
<br />
        <FormControlLabel
          name="chords"
          onChange={handleChange}
          control={<Checkbox checked={formState.chords} />}
          label="Chords"
        />
         {formState?.chords === true ? (
           <TextField
           id="outlined-multiline-static"
           label="Song Chords & Lyrics"
           name="chordsAndLyrics"
           multiline
           rows={8}
           helperText="Paste the Song Lyrics with Chords"
           onChange={handleChange}
           value={formState.chordsAndLyrics}
         />
        ) : (
          <></>
        )}
           <br />
        <TextField
          id="standard-basic"
          name="youtubeLink"
          label="Youtube Link"
          onChange={handleChange}
          value={formState.youtubeLink}
          variant="outlined"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" onClick={()=>handleSubmit()}>
          Add
        </Button>
      </div>
    </>
  );
};
