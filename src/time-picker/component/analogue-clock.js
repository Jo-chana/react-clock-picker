import React, { useCallback, useMemo, useState } from 'react';

const HOURS = [...Array(12).keys()]

function degreeToRadian(angle) {
    return 2 * angle / 360 * Math.PI;
}

function Hours({
    hour,
    clockSize,
}) {

    const [hourSize, setHourSize] = useState(clockSize / 10);
    const index = HOURS.indexOf(hour);
    const angle = degreeToRadian(30 * index);
    const offsetSize = useMemo(() => clockSize - hourSize, [hourSize, clockSize]);
    const offsetX = useMemo(() => (offsetSize) / 2 * (1 + Math.sin(angle)), [offsetSize, angle]);
    const offsetY = useMemo(() => (offsetSize) / 2 * (1 - Math.cos(angle)), [offsetSize, angle]);

    const handleMouseOver = useCallback(() => {
        setHourSize(clockSize / 6);
    }, [clockSize]);
    const handleMouseOut = useCallback(() => {
        setHourSize(clockSize / 10);
    }, [clockSize]);

    return <div onMouseOver={ handleMouseOver } 
        onMouseOut={ handleMouseOut }
        key={ hour }
        style={ { 
            position: 'absolute',
            top: offsetY,
            left: offsetX,
            width: hourSize,
            height: hourSize,
            borderRadius: hourSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
            fontSize: hourSize - 4,
            color: 'white',
        } }>
        { hour }
    </div>
}

export default function AnalogueClock({
    clockSize,
}) {

    const dotSize = 4;
    const dotPositionOffset = (clockSize / 2) - (dotSize / 2);

    return <div style={ { 
        width: clockSize,
        height: clockSize,
        borderRadius: clockSize,
        border: 'solid black',
        position: 'relative',
    } } >
        <div style={ { 
            position: 'absolute',
            top: dotPositionOffset,
            left: dotPositionOffset,
            height: dotSize,
            width: dotSize,
            borderRadius: dotSize,
            backgroundColor: 'black',
        } } />
        { HOURS.map(hour => 
            <Hours hour={ hour } key={ hour } clockSize={ clockSize }/>
        )}
    </div>
}