import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSongs, setSelectedSongData } from "../redux/action";

export const SongList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedListName = useSelector((state) => state?.selectedListName);
  const songsList = useSelector((state) => state?.selectedSongsList);

 
  const getSongData = (data) => {
    dispatch(setSelectedSongData(data))
    navigate("/Song")
  }

  const backToList = () => {
    window.history.back();
    dispatch(getSongs())
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ marginTop: "2em", fontWeight: "900", color: '#232626' }}>
        {selectedListName}
      </Typography>
      <Box
        sx={{
    
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {songsList.map((data, index) => (
          <p key={index}>
            <Button
              variant="contained"

              size="large"
              sx={{

                marginTop: "1em",
                width: { xs: "80vw", md: "40vw" },
                height: "6vh",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",

                
              }}
              onClick={() => getSongData(data)}
            >
              {data?.songName}
            </Button>
          </p>
        ))} <Button
          size="large"
          sx={{
            background: '#f3f0ee',
            marginTop: '1em',
          }}
          onClick={() => backToList()}
        >
          Back to Home
        </Button>
      </Box>
    </div>
  );
};
