import React from "react";

const UpcomingReleases = ({text, url}) => {
    return (
        <a href={url} className="upcoming-release">{text}</a>
    );
};

export default UpcomingReleases;