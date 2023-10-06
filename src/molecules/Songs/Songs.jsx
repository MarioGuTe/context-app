import { useContext } from "react";
import SearchTracks from "../../atoms/SearchTracks/SearchTracks";
import Tracks from "../../atoms/Tracks/Tracks";
import Message from "../../atoms/Message/Message";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import { SongsContext } from "../../contexts/Songs/SongsContext";

const Songs = () => {
  const { validateQTrack, doneFetch, tracks, text } = useContext(SongsContext);

  return (
    <>
      <SearchTracks validateQTrack={validateQTrack} />
    </>
  );
};

export default Songs;
