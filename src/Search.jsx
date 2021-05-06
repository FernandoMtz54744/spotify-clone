import React, { useContext, useEffect, useRef, useState } from 'react'
import Reproductor from './Reproductor';
import { currentSongContext } from './ReproductorContext';

function Search() {

    const {currentSong, setCurrentSong, favoritos, setFavoritos} = useContext(currentSongContext);

    const input = useRef(null);
    const [songs, setSongs] = useState([]);

    const search = async ()=>{
        let cancion = input.current.value;
        let baseUrl = "https://api.napster.com"
        let key = "apikey=Yzk3MTA5YzEtZGY0NC00ZGQ2LWI1MmItNmY5NzM1MjJlNmE0"
        let query = `query=${cancion}`
        let url = baseUrl + `/v2.2/search/verbose?${key}&${query}`;

        let response = await fetch(url);
        let json = await response.json();
        setSongs(json.search.data.tracks);
    }

    useEffect(()=>{
        console.log(songs);
    }, [songs])

    const play = (previewURL)=>{
        setCurrentSong(previewURL);
    }

    const addFavorito = (song)=>{
        setFavoritos([...favoritos, song]);
    }

    return (
        <div>
        <div className="busqueda">
           <input type="text" ref={input} placeholder="Busca tu canción"/>
           <i className="fas fa-search fa-2x searchButton" onClick={search}></i>
        </div>

        <section className="tracks">
           {songs.map(song =>{ return(
               <div key={song.id} className="song">
                   <h3>{song.name}</h3>
                   <h3>{song.artistName} - {song.albumName}</h3>
                   <div className="opciones">
                   <i className="fas fa-play fa-2x playButton" onClick={() => play(song)}></i>
                   <i className="fas fa-heart fa-2x favButton" onClick={() => addFavorito(song)}></i>
                   </div>
               </div>
           )})}
        </section>
            {currentSong && <Reproductor url={currentSong.previewURL} name={currentSong.name} album={currentSong.albumName} artist = {currentSong.artistName}/>}
            
        </div>
    )
}

export default Search
