import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      toggle:false,
      color:'#282c34',
      theme:'This is dark theme',
      themecolor:'#FFF'
    }
  }
  render() {
    const Change = () => {
      let Toggle = !this.state.toggle;
      let Color,Theme,ThemeColor
      if( Toggle == true){
        Color = '#FFF'
        Theme = "This is Light Theme";
        ThemeColor = "#000"
      }else{
        Color = '#282c34'
        Theme = "This is dark theme";
        ThemeColor = "#FFF"
      }
      this.setState(
        {
          toggle:Toggle,
          color:Color ,
          theme:Theme,
          themecolor:ThemeColor
        }
      )
    }
    return (
      <div className='App' style={{background:this.state.color}}>

        <h1 style={{color:this.state.themecolor}}>{this.state.theme}</h1>
        <button onClick={Change} style={{border:"2px solid red",background:this.state.color,color:this.state.themecolor}}>ChangeTheme</button>
      </div>
    )
  
  }
}

