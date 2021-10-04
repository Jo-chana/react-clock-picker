import React from 'react';
import AnalogueClock from './component/analogue-clock';

const TimePicker = ({
    containerWidth = 300,
    containerHeight = 400,
}) => {
    
    const clockSize = containerWidth * 5 / 6;
    return <div style={ { 
        width: containerWidth,
        height: containerHeight,
        border: 'solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingTop: 24,
    } }>
        <AnalogueClock clockSize={ clockSize } />
    </div>
}

export default TimePicker;