import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEnglishSongsData, setTeluguSongsData } from "../redux/action";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const songsData = useSelector((state) => state?.totalData);


  const getEnglishSongs = () => {
    const englishSongs = songsData.filter(
      (song) => song.Language === "English"
    );
    dispatch(setEnglishSongsData(englishSongs))
    navigate("/SongsList")
  
  };

  const getTeluguSongs = () => {
    const teluguSongs = songsData.filter((song) => song.Language === "Telugu");
    dispatch(setTeluguSongsData(teluguSongs))
    navigate("/SongsList")

  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <Typography variant="h6" sx={{ marginTop: "2em" }}>
        Come, let us sing for joy to the LORD; let us shout aloud to the Rock of
        our salvation.
      </Typography>
      <Box
        sx={{
          width: "70vw",
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
          size="large"
          sx={{
            background: "#cfe4ff",
            marginTop: "2em",
            width: "70vw",
            height: "8vh",
          }}
          onClick={() => getEnglishSongs()}
        >
          English Songs
        </Button>

        <Button
          size="large"
          sx={{
            background: "#cfe4ff",
            marginTop: "2em",
            width: "70vw",
            height: "8vh",
          }}
          onClick={() => getTeluguSongs()}
        >
         
          Telugu Songs
        </Button>

        <Button
          size="large"
          sx={{
            background: "#cfe4ff",
            marginTop: "2em",
            width: "70vw",
            height: "8vh",
          }}
        >
          Hindi Songs
        </Button>

        <Button
          size="large"
          sx={{
            background: "#cfe4ff",
            marginTop: "2em",
            width: "70vw",
            height: "8vh",
          }}
        >
          Tamil Songs
        </Button>
      </Box>
    </div>
  );
};
