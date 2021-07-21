import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.scss';
//import A2it from './A2it';


ReactDOM.render(
   <BrowserRouter> 
    <App />
   </BrowserRouter>,
 document.getElementById('root')
); 
 




///ReactDOM.render( <A2it />,document.getElementById('root')); 

