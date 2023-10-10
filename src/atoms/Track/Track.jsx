import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import track from "./../../assets/img/track.png";
import album from "./../../assets/img/album.png";

const Track = ({ track_name, album_name, artist_name }) => (
  <Grid item xs={12} sm={6}>
    <Paper className="defaultPaper">
      <h3>{artist_name}</h3>
      <ul>
        <li>
          <img src={track} alt="track" />
          <strong>Track: </strong>
          <span>{track_name}</span>
        </li>
        <li>
          <img src={album} alt="album" />
          <strong>Album: </strong>
          <span>{album_name}</span>
        </li>
        <li>
          <ButtonPrimary type="lyrics" />
        </li>
      </ul>
    </Paper>
  </Grid>
);

export default Track;
