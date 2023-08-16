import React from 'react'

const FloatingCircles = () => {
    const circles = Array.from({length: 100}, (_, i) => i);

    return (
        <>
            {
            circles.map(circle => 
            (
                <div 
                 className="circle-wrapper position-absolute top-0 left-0 rounded-circle" 
                 key={circle} 
                 style={{
                  '--x': Math.random(), 
                  '--y': Math.random(), 
                  '--size': Math.random() * 10 + 'px', 
                  '--duration': Math.random() * 15 + 10 + 's', 
                     }}
                >
                    <div className="circle w-100 h-100"></div>
                </div>
            ))}
        </>
    );
};

export default FloatingCircles;
