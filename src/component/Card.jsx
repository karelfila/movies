import { useState } from "react";

export const Card = (title, director) => {

    const [stars, setStars] = useState(0)

    const numbers = Array.from(Array(5).keys())

    const handleClick = (n) => {
        if(n === stars) setStars(0)
        else setStars(n)
    }

    return (
        <div className="movie-card">
            <div className="content">
                <div className="title">{title}</div>
                <div className="director">{director}</div>
                <div className="info">
                </div>
            </div>
            <div className="stars">
                {numbers.map((i, n) => <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round" key={i} onClick={() => handleClick(n+1)} style={n+1 <= stars ? {fill: '#005bd1'} : {}}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                </svg>)}
            </div>
        </div>
    );
};

