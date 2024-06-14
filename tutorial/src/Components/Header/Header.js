import React from 'react'


const username=["Ravika", "Tanish", "Kaashni", "Abhishek", "Karishma", "Shashank"]
function getRandom(max){
    return Math.floor(Math.random()* (max+1));
}

function Header() {
  return (
    <h1 style={{color:'#dca3ff'}}>{username[getRandom(5)]} will teach you react.</h1>
  )
}

export default Header;