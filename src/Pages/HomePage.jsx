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
    const englishSongs = songsData?.filter(
      (song) => song?.language === "English"
    );
    dispatch(setEnglishSongsData(englishSongs));
    navigate("/SongsList");
  };

  const getTeluguSongs = () => {
    const teluguSongs = songsData?.filter(
      (song) => song?.language === "Telugu"
    );
    dispatch(setTeluguSongsData(teluguSongs));
    navigate("/SongsList");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ marginTop: "2em", padding: "1em" ,fontSize:"large"}}>
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
          className="buttons"
          
          sx={{
            marginTop: "2em",
              width: { xs: "80vw", md: "40vw" },
            height: "6vh",
            fontWeight: "900rem",
          }}
          variant="contained"
          onClick={() => getEnglishSongs()}
        >
          English Songs
        </Button>

        <Button
          size="large"
          variant="contained"
          sx={{
            marginTop: "2em",
              width: { xs: "80vw", md: "40vw" },
            height: "6vh",
          }}
          onClick={() => getTeluguSongs()}
        >
          Telugu Songs
        </Button>

        <Button
          size="large"
          variant="contained"
          sx={{
            marginTop: "2em",
            width: { xs: "80vw", md: "40vw" },
            height: "6vh",
          }}
        >
          Hindi Songs
        </Button>

        <Button
          size="large"
          variant="contained"
          sx={{
            marginTop: "2em",
              width: { xs: "80vw", md: "40vw" },
            height: "6vh",
          }}
        >
          Tamil Songs
        </Button>
      </Box>
    </div>
  );
};
