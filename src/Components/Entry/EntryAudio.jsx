import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import matrix from "../../Assets/matrixTheme.mp3";
import play from "../../Assets/play.png";
import pause from "../../Assets/pause.png";

function EntryAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Main>
      <Div onClick={playPause}>
        {isPlaying ? (
          <Img src={pause} alt="play"></Img>
        ) : (
          <Img src={play} alt="pause"></Img>
        )}
      </Div>
      <audio ref={audioRef}>
        <source src={matrix} type="audio/mp3" />
      </audio>
    </Main>
  );
}

const Main = styled.main`
  position: absolute;
  left: 15px;
  opacity: 0.3;
  top: 15px;
  transition: 0.3s;
  width: auto;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Div = styled.div`
  cursor: pointer;
  height: auto;
  color: white;
  width: auto;
`;

const Img = styled.img`
  height: 20px;
  width: 20px;
`;

export default EntryAudio;
