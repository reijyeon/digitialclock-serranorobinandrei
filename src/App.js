import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return setInterval(clock, 1000)
}

function clock() {
  const d = new Date();
  const day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const element = (
    <div class="grid-container">
      
      <div class="grid-item item-1">
          <h2>{d.getHours() > 12 ? "PM": "AM"}</h2>
      </div>

      <div class="grid-item item-2">
          {d.getHours() % 12 || 12}:{d.getMinutes() < 10 ? '0' : ''}{d.getMinutes()}
      </div>

      <div class="grid-item item-3">
          <h2>{d.getSeconds() < 10 ? '0' : ''}{d.getSeconds()}</h2>
      </div>

      <div class="grid-item item-4">
          <h4> {d.toLocaleString('default', { month: 'long' })} {d.getDate()} {d.getFullYear()}</h4>
      </div>

      <div class="grid-item item-5">
          <h4>{day[d.getDay()]}</h4>
      </div>

    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
export default App;
