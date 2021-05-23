import React from 'react';

const customCursor = {
    zIndex: '1000',
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    border: '1px solid red',
    pointerEvents: 'none',
    overflow: 'hidden',
    transform: 'translate(0, 0, 0)',
    position: 'fixed',
}

const CustomCursor = () => {

    const cursorRef = React.useRef(null);


    React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
    })

    return (
        <div>
            <div style={customCursor} ref={cursorRef}></div>
        </div>

    );
}

export default CustomCursor;
