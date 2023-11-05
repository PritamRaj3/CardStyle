import React, { Component } from 'react'
import './card.less';

export default class CardDetails extends Component {
  constructor(){
    super();
  }   
  
  blurName=()=>{
    console.log('bluerd name');
    let rule = /^[a-zA-Z]([0-9a-zA-Z]+){2,20}/;
    let str = document.querySelector('#name').value;
    let small=document.querySelector('#smallName');

    if(rule.test(str)){
      console.log('valed name');
      small.classList.add('show');
    }
    else{
      console.log('invalied name');
      small.classList.remove('show');
    }
  }
  blurCardNumber=()=>{
    console.log('bluerd card number');
    let rule=/^([0-9]){16}$/;
    let str=document.querySelector('#cardnumber').value;
    let small=document.querySelector('#smallNumber');

    if(rule.test(str)){
      console.log('valid');
      small.classList.add('show');

    }
    else{
      console.log('invalied');
      small.classList.remove('show');
    }


  }
  blurMm=()=>{
    console.log('bluerd mm ');
    let rule=/^([0-9])/;
    let str=document.querySelector('#mm').value;
    let small=document.querySelector('#smallMm');

    if(rule.test(str)){
      console.log('valid');
      small.classList.add('show');
    }
    else{
      console.log('invalied');
      small.classList.remove('show');
      
    }
  }
  blurYy=()=>{
    console.log('bluerd yy');
    let rule=/^([0-9]+)/;
    let str=document.querySelector('#yy').value;
    let small=document.querySelector('#smallYy');

    if(rule.test(str)){
      console.log('valid');
      small.classList.add('show');
    }
    else{
      console.log('invalied');
      small.classList.remove('show');
    }
  }
  blurCvc=()=>{
    console.log('bluerd cvc');
    let rule=/^([0-9]){3}/;
    let str=document.querySelector('#cvc').value;
    let small=document.querySelector('#smallCvc');

    if(str.match(rule)){
      console.log('valid');
      small.classList.add('show');
    }
    else{
      console.log('invalied');
      small.classList.remove('show');

    }
  }
  submit=()=> {
    console.log('click confirm button');
        
  };
  render() {
    return (
      <>
        <div className='form'>
          {/* name number input */}
          <div className="namenumber">
            <label htmlFor="name">Card Custmer Name</label>
            <input onBlur={this.blurName} id='name'  className='input'  placeholder='ex. Hestar Shaw' />
            <small id='smallName' className='show small'>Invailed Card Name</small>
            <label htmlFor="number">Card Number</label>
            <input onBlur={this.blurCardNumber}  id='cardnumber' className='input'  placeholder='ex. 1234 5678 9012 3456' />
            <small id='smallNumber' className='show small'>Invailed Card Number</small>
          </div>
          {/* expdate cvc */}
          <div className="datecvc">
            <label id="labelexdate">Exp. Date-MM\YY</label>
            <input id="mm" placeholder='MM' onBlur={this.blurMm} />
            <small id='smallMm' className='show small'>Invailed Month</small>

            <input id="yy" placeholder='yy' onBlur={this.blurYy}/>
            <small id='smallYy' className='show small'>Invailed years</small>

            <label id="labelcvc">CVC</label>
            <input id="cvc" placeholder='ex. 123' onBlur={this.blurCvc}/>
            <small id='smallCvc' className='show small'>Invailed Cvc</small>
          </div>
        </div>
          <button id='confirm' onClick={this.submit}>Confirm</button>
      </>
    )
  }
}
