import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export const Song = () => {
    const selectedSong = useSelector((state) => state?.selectedSong);


    const backToList =()=>{
        window.history.back();
    }
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginTop: "1em" }}>
        {selectedSong.Name}
      </Typography>
      <Box
        sx={{
          width: '70vw',
          margin: 'auto',
          alignItems: 'center',
          textAlign: 'center',
          whiteSpace: 'pre-line', // or whiteSpace: 'pre-wrap'
        }}
      >
        <Typography variant="h6" sx={{ marginTop: '1em' }}>
          {selectedSong?.Lyrics?.split('<br>').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>

        <Button
          size="large"
          sx={{
            background: '#cfe4ff',
            marginTop: '1em',
          }}
          onClick={() => backToList()}
        >
          Back to List
        </Button>
      </Box>
    </div>
  )
}
