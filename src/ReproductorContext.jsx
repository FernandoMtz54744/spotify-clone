import React, { createContext, useState } from 'react'
import { useLocalStorage } from 'react-use';


export const currentSongContext = createContext();

function ReproductorContext({children}) {
    const [currentSong, setCurrentSong] = useState(null);
    const [favoritos, setFavoritos] = useLocalStorage('favoritos', []);  /*useState([])*/

    return (
        <currentSongContext.Provider value={{currentSong, setCurrentSong, favoritos, setFavoritos}}>
        {children}
        </currentSongContext.Provider>
    )
}

export default ReproductorContext
