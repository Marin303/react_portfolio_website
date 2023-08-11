import React from 'react'

const FloatingCircles = () => {
    const circles = Array.from({length: 100}, (_, i) => i);

    return (
        <>
            {circles.map(circle => (
                <div className="circle-wrapper" key={circle} 
                     style={{
                         '--x': Math.random(), 
                         '--y': Math.random(), 
                         '--size': Math.random() * 10 + 'px', 
                         '--duration': Math.random() * 15 + 10 + 's', 
                     }}
                >
                    <div className="circle"></div>
                </div>
            ))}
        </>
    );
};

export default FloatingCircles;
