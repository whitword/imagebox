import React, { useState } from 'react';
import './ImageBoxComponent.css';
import MyImage from '../18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg';

const ImageBoxComponent = () => {

  const imageUrl = MyImage;
  const [zoom, setZoom] = useState(2);
  const [saturation, setSaturation] = useState(100);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleZoomChange = (event) => {
    setZoom(event.target.value);
  };

  const handleSaturationChange = (event) => {
    setSaturation(event.target.value);
  };

  const handleMouseMove = (event) => {
    const imageBox = document.getElementById('image-box');
    const boxRect = imageBox.getBoundingClientRect();
    const cursorX = event.clientX - boxRect.left;
    const cursorY = event.clientY - boxRect.top;

    setCursorPosition({ x: cursorX, y: cursorY });
  };

  return (
    <div className="container">
      <div className="zoom-container">
      <div
        id="image-box"
        className="image-box"
        onMouseMove={handleMouseMove}
        style={{
          width: '768px',
          height: '432px',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `100%`,
        }}
      >
        <div
          className="zoom-circle"
          style={{
            top: `${cursorPosition.y - 50}px`,
            left: `${cursorPosition.x + 50}px`,
            backgroundPosition: `-${(cursorPosition.x) * zoom}px -${(cursorPosition.y) * zoom}px`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${zoom * 800}%`,
            filter: `saturate(${saturation}%)`
          }}
        ></div>
      </div>
      <div style = {{rotate:"calc(90deg)"}}>
        <label>Zoom:</label>
        <input type="range" min="1" max="10" value={zoom} onChange={handleZoomChange} />
        <output>{zoom}</output>
      </div>
      </div>
      <div className="saturation-slider-container">
        <label>Saturation:</label>
        <input type="range" value={saturation} onChange={handleSaturationChange} min="1" max="100" ></input>
        <output>{saturation}</output>
      </div>
    </div>
  );
};

export default ImageBoxComponent;
