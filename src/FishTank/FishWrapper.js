// package dependencies
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// components
import Fish from './Fish.js';

const FishWrapper = (props) => {

  const [renderedFish, setRenderedFish] = useState(new Array(props.numFish).fill('', 0, props.numFish))

  useEffect(() => {
    setRenderedFish([])
    setRenderedFish(new Array(props.numFish).fill('', 0, props.numFish))
  }, [props.numFish])
  return (
    <View>
      {renderedFish.map((fish, index) => (
        <Fish SCREEN_WIDTH={props.SCREEN_WIDTH} SCREEN_HEIGHT={props.SCREEN_HEIGHT} key={index} />
      ))}
    </View>
  )
}

export default FishWrapper;