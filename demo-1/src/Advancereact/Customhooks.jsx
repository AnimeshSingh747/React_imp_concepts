import React, { useState, useEffect } from 'react';

//Custom hooks
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(Window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () =>window.removeEventListener('resize', handleResize);
    },[]);

    return width;
}

export default function App() {
    const width = useWindowWidth();

    return (
        <div>
            <h1>Custom Hook example</h1>
            <p>Window width: {width}px</p>
        </div>
    );
}
export default App;
