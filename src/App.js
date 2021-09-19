import logo from './logo.svg';
import './App.css';
import React, {Component, useEffect, useState} from 'react';

function App () {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter () {
  const [ counter, setCounter ] = useState( 0 );

  const handleIncrease = () => {
    const newCounter = counter + 1;
    setCounter( newCounter );
  }

  const handleDecrease = () => {
    const newCounter = counter - 1;
    if ( newCounter < 0 ) {
      return;
    }
    else {
      setCounter( newCounter );
    }

  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function ExternalUsers () {
  const [ users, setUsers ] = useState( [] );
  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
      .then( res => res.json() )
      .then( data => setUsers( data ) );
  }, [] );
  return (
    <div>
      <h4>User Count: {users.length}</h4>

      <h3>External Users List </h3>
      {
        users.map( user => <User name={user.name} email={user.email}></User> )
      }
    </div>
  )
}

function User ( props ) {
  return (
    <div className='user'>
      <h2>Name: {props.name} </h2>
      <h4>Email: {props.email} </h4>
    </div>
  )
}

/* function Product ( props ) {
  const productStyle = {
    border: '3px solid red',
    borderRadius: '25px'
  };
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
} */

/* 
const products = [
    {name: 'Mobile', price: 15000},
    {name: 'Laptop', price: 150000},
    {name: 'Camera', price: 55000},
    {name: 'Watch', price: 5000},
    {name: 'Keyboard', price: 1500},
  ]
*/
/* 
{
  products.map( product => <Product name={product.name} price={product.price}></Product> )
} */

/* 
<Product name="Mobile" price="15000"></Product>
      <Product name="Laptop" price="150000"></Product>
      <Product name="Camera" price="55000"></Product>
      <Product name="Watch" price="5000"></Product>
      <Product name="Keyboard" price="1500"></Product>
*/

export default App;