import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    return (
        <div>
            <h1>Color List</h1>
            <Link to="/colors/new">Add a color</Link>
            {colors.map(color => (
                <div key={color}>
                    <Link to={`/colors/${color}`}>{color}</Link>
                </div>
            ))}
        </div>
    );
}

export default ColorList;