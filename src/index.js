import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardInfo from './components/Card/CardInfo';
import NavBar from './components/NavBar/NavBar';
import data from './json/posts.json'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <CardInfo posts={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

