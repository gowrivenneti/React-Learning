import React,{useState,useEffect} from 'react';
function WidthHeightUE(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
         console.log("Listener Added");
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Cleaning up event listener');
        };
    }, []);
    return (
        <div>
            <h1>Window Size</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}
export default WidthHeightUE;