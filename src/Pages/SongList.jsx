import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedSongData } from "../redux/action";

export const SongList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedListName = useSelector((state) => state?.selectedListName);
  const songsList = useSelector((state) => state?.selectedSongsList);

  const getSongData =(data)=>{
    dispatch(setSelectedSongData(data))
    navigate("/Song")
  }

  const backToList =()=>{
    window.history.back();
}
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ marginTop: "2em" }}>
        {selectedListName}
      </Typography>
      <Box
        sx={{
          width: "70vw",
          margin: "auto",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {songsList.map((data, index) => (
          <p key={index}>
            <Button
              size="large"
              sx={{
                background: "#cfe4ff",
                marginTop: "1em",
                width: "70vw",
                height: "6vh",
              }}
              onClick={() => getSongData( data)}
            >
              {data.Name}
            </Button>
          </p>
        ))} <Button
        size="large"
        sx={{
          background: '#cfe4ff',
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
