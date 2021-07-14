import React, { useState } from 'react';
import "./App.css";

const Water = () => {
    const [degrees, setDegrees] = useState('');
    const [waterState, setWaterState] = useState('NOTHING');
    const [classNameState, setClassNameState] = useState('liquid');

    const handleChange = e => {
        const { value } = e.target;
        console.log(value, 'vallll');
        let result = parseInt(value);
        setDegrees(result);
        console.log(degrees);
        if (value <= 0) {
            setWaterState('Solid');
            setClassNameState('solid');
        } else if (value >= 100) {
            setWaterState('Gas');
            setClassNameState('gas');
        } else {
            setWaterState('Liquid');
            setClassNameState('liquid');
        }
    };

    return (
        <div className="WaterApp">
            <h2>Degrees:</h2>{' '}
            <input
                type="number"
                name="water"
                value={degrees}
                onChange={handleChange}
                required
            />
            <div className={classNameState}>
                <h3>
                    At {degrees}°C, water is considered to be a "{waterState}" state of
                    matter.
                </h3>
            </div>
        </div>
    );
};

export default Water;
