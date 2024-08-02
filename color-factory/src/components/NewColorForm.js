import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
    const [color, setColor] = useState('#000000');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        navigate('/colors');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit">Add this color</button>
        </form>
    );
}

export default NewColorForm;