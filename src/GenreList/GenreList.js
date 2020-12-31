import React from 'react';

import Genre from '../Genre/Genre';

class GenreList extends React.Component
{
    render() {
        return (
            <div className="GenreList">
                {this.props.genres.map((genre) => {
                    
                })}
            </div>
        );
    }
}

export default GenreList;