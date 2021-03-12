import React, { useState } from 'react';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import TestUseEffect from './Components/TestUseEffect/TestUseEffect';
import MealFinder from './Components/MealFinder/MealFinder';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const [likeColors, setLikeColors] = useState('');
 const colorChange = () => {
    const colorA = likeColor ? '' : 'primary';
    setLikeColor(colorA);
 }

  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick ={colorChange}  color={likeColor}></ThumbUpAltIcon>
      <ThumbUpAltIcon onClick ={() => setLikeColors(likeColors ? '' : 'secondary')}  color={likeColors}></ThumbUpAltIcon>

      <TestUseEffect></TestUseEffect>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
