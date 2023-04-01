import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogsData = [
    {id: "1", name: 'Dimysh'},
    {id: "2", name: 'Andrey'},
    {id: "3", name: 'Sweta'},
    {id: "4", name: 'Sasha'},
    {id: "5", name: 'Valera'},
]
const messageData = [
    {id: "1", message: "Hi"},
    {id: "2", message: "Hi,hi"},
    {id: "3", message: "How are you?"},
    {id: "4", message: "I'm , Oke"},
]
const postData = [
    {id: "1", message: "Hi, how are you?", likeCount: 10},
    {id: "2", message: "It's my first post", likeCount: 12},
    {id: "3", message: "omg", likeCount: 27},
]

ReactDOM.render(
    <App dialogsData={dialogsData}
         messageData={messageData}
         postData={postData}
    />,
  document.getElementById('root')
);