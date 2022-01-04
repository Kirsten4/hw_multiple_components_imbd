import React from "react";
import Film from "./ListedFilm"

const FilmList = ({films}) => {
    
    const filmNodes = films.map((film) => {
        return (
            <Film key={film.id} name={film.name} url={film.url}></Film>
        )
    })

    return (
        <>
            {filmNodes}
        </>
    );
};

export default FilmList;