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

    const customRef = React.useRef(null);




    React.useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e
            const mouseX = clientX - customRef.current.clientWidth / 2
            const mouseY = clientY - customRef.current.clientHeight / 2
            customRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        }
        // add the event listener
        document.addEventListener('mousemove', onMouseMove)
        // cleanup function
        return () => {
            // remove the event listener when the component unmounts
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <div>
            <div style={customCursor} ref={customRef}></div>
        </div>

    );
}

export default CustomCursor;
