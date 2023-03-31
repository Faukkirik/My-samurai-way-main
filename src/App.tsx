import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src="https://cdn.onlinewebfonts.com/svg/download_333365.png" alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://img3.badfon.ru/original/1920x1080/e/34/utro-tuman-lep-peyzazh-3038.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
