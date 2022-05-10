import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router'

export const civilizations = [
    {
      "civilization": "All",
      "abbr": "ALL",
    },
    {
        "civilization": "Abbasid Dynasty",
        "abbr": "AD",
    },
    {
        "civilization": "Chinese",
        "abbr": "CH",
    },
    {
        "civilization": "Delhi Sultanate",
        "abbr": "DS",
    },
    {
        "civilization": "French",
        "abbr": "FR",
    },
    {
        "civilization": "English",
        "abbr": "EN",
    },
    {
        "civilization": "Holy Roman Empire",
        "abbr": "HR",
  
    },
    {
        "civilization": "Mongols",
        "abbr": "MO",
    },
    {
        "civilization": "Rus",
        "abbr": "RU",
    }
    ];
  
const CivHeader = (props) => {
    const router = useRouter()
    const [value, setValue] = useState(props.currentValue);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (civilizations[newValue].abbr == 'ALL') {
            router.push("/buildOrderTable/"+"?page=1");
        } else {
            router.push("/buildOrderTable/"+civilizations[newValue].abbr+"?page=1");
        }
      };
    
    return (
        <div>
        <h1> {civilizations[props.currentValue].civilization} Build Orders</h1>
        <Tabs value={value} onChange={handleChange} centered>
        {civilizations.map(item => (<Tab key={item.civiliation} label={item.civilization} />))}
        </Tabs>
        </div>
    );
};


export default CivHeader;
