import React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

export const Song = () => {
  const selectedSong = useSelector((state) => state?.selectedSong);

  const backToList = () => {
    window.history.back();
  };

  const [lyricsTab, setLyricsTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setLyricsTab(newValue);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Box
        sx={{
          width: "94.5vw",
          margin: "auto",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          fontWeight: "2em",
          padding: "2em",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: "1em", fontWeight: "900" }}>
          {selectedSong?.songName}
        </Typography>

        <Tabs value={lyricsTab} onChange={handleChange} centered>
          <Tab label="Lyrics" />
          <Tab label="Lyrics in English" isDisabled={selectedSong?.englishLyrics===''?true:false} />
          <Tab label="Chords" />
        </Tabs>
        <Typography variant="h6" sx={{ marginTop: "1em", fontWeight: "600" }}>
        
         { lyricsTab===0?selectedSong?.lyrics?.split("<br>").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))
        :null}
        
        { lyricsTab===1?selectedSong?.englishLyrics?.split("<br>").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))
        :null}

          { lyricsTab===2?selectedSong?.chordsAndLyrics?.split("<br>").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))
        :null}
        </Typography>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <ReactPlayer url={selectedSong?.youtubeLink} />
        </div>
        <Button
          size="large"
          sx={{
            background: "#cfe4ff",
            marginTop: "1em",
          }}
          onClick={backToList}
        >
          Back to List
        </Button>
      </Box>
    </div>
  );
};
