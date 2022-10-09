import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import useMusicPlayer from "../hooks/useMusicPlayer";

function TrackList() {
  const {
    trackList,
    currentTrackIndex,
    currentTrackName,
    playTrack,
    isPlaying,
  } = useMusicPlayer();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5e376d",
          borderRadius: "70px 70px 0px 0px",
        }}
      >
        <Box
          width={"70%"}
          margin={"0px auto"}
          textAlign={"center"}
          letterSpacing={"2px"}
          fontWeight={400}
          fontSize={"18px"}
        >
          {currentTrackName}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {trackList.map((track, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{
              width: "60%",
              height: "45px",
              backgroundColor: "hsla(0,0%,100%,.5)",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              paddingLeft: "15px",
              mt: "8px",
              mb: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "gray",
            }}
            onClick={() => {
              playTrack(index);
            }}
            startIcon={
              index === currentTrackIndex && isPlaying ? (
                <PauseCircleIcon sx={{ fontSize: "30px" }} />
              ) : (
                <HeadphonesIcon sx={{ fontSize: "30px" }} />
              )
            }
          >
            <Typography sx={{ textTransform: "capitalize", fontSize: "12px" }}>
              {track.name}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  );
}

export default TrackList;
