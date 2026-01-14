import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
   
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor = {backgroundColor: isOn ? "#4caf50" : "#ccc"};
    return (
        <div className="toggle-switch" style={toggleBGColor}
         onClick={handleToggleSwitch}>
        <div className={`switch ${checkIsOn}`}>
            <span className="Switch-state">  {checkIsOn}</span>
          
        </div>
        </div>
    );
};                                                      
