import React from "react";

const Film = ({name, url}) => {
    return (
        <li>
            <a href={url} className="listed-film">{name}</a>
        </li>
    );
};

export default Film;