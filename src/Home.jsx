import React, { useContext } from 'react'
import Reproductor from './Reproductor';
import { currentSongContext } from './ReproductorContext';

function Home() {
    const  {currentSong, setCurrentSong, favoritos} = useContext(currentSongContext);

    const play = (previewURL)=>{
        setCurrentSong(previewURL);
    }

    return (
        favoritos.length === 0?
        <div className="vacio">Vaya, que vacio está por aquí :c
        <br/>Agrega canciones a tus favoritos </div>:
        <>
        <div className="tracks">
          {favoritos.map(song =>{ return(
               <div key={song.id} className="song">
                    <h3>{song.name}</h3>
                   <h3>{song.artistName} - {song.albumName}</h3>
                   <div className="opciones">
                   <i className="fas fa-play fa-2x playButton" onClick={() => play(song)}></i>
                   </div>
                   {/*<button onClick={() => addFavorito(song)}>Favorito</button>*/}
               </div>
           )})}
        </div>
        {currentSong && <Reproductor url={currentSong.previewURL} 
                                    name={currentSong.name} 
                                    album={currentSong.albumName} 
                                    artist={currentSong.artistName}/>}
        
        </>
    )
}

export default Home
