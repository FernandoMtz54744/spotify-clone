import {useAudio} from 'react-use';

const Reproductor = ({url, name, album, artist}) => {
  const [audio, state, controls] = useAudio({
    src: url,
    autoPlay: true,
  });

  return (
    <div className="Reproductor">
      {audio}
      {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
      <div className="infoTrack">
      <h2>{artist} - {album}</h2>
      <h2>{name}</h2>
      </div>
      <i className={`fas ${state.paused?"fa-play":"fa-pause"} fa-3x playButton`} onClick={state.paused? controls.play: controls.pause}></i>
      <div className="timeTrack">
      <label htmlFor="time">{Math.round(state.time)}</label>
      <input type="range"  min="0" max ={state.duration}  step="1" id="time" value={state.time} readOnly/>
      </div>
      <input type="range" min="0" max="1" step="0.01" orientation="vertical" id="volume" onChange={e => {controls.volume(e.target.value)}} /> 

    </div>
  );
};

export default Reproductor;