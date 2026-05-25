import React, {useState} from 'react';
function ColorPicker() {
  const [color, setColor] = useState('#FFFFFF');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
    <div className="color-picker">
      <h2 className="color-picker-title">Color Picker App</h2>
      <div className="color-preview" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label className="color-label">Select a color:</label>
      <input className="color-input" type="color" value={color} onChange={handleColorChange} />
    </div>
    </div>
  );
}
export default ColorPicker;