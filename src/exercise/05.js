// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const Box = ({size, className, style, ...otherProps}) => {
  console.log(`style`, style)
  console.log(`otherProps`, otherProps)
  return (
    <div className={`box ${size}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
    // <div className={`box ${size}`} style={style} {...otherProps} />
  );
}

const smallBox = <Box size="small" className="box--small" style={{backgroundColor: 'lightblue'}}>Small light blue</Box>
const mediumBox = <Box size="medium" className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" className="box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
