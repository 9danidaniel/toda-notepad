import logo from './assets/images/smiley.png';
import './App.css';
import { useState } from 'react';

function App() {
const [isTitleShown, setIsTitleShown] = useState(false);
const [savedNote, setSavedNote] = useState(localStorage.getItem("note") ?? '');

  return (
    <div className="App">
      <header dir='rtl' className="App-header">
        <div className='select-none fixed top-6 flex flex-row h-min items-center bg-[#b4530910] rounded-full  cursor-pointer'  onClick={() => setIsTitleShown(!isTitleShown)}>
          <img src={logo} className="App-logo" alt="logo" />
         {isTitleShown && <p className='text-7xl mr-1 text-amber-600 font-bold pl-6'>מכתב לתודה</p>}
        </div>
        <div className='mt-40 px-32 pb-20 h-[100000px]'>
          <textarea 
          value={savedNote}
          onChange={(event) => {
            const message = event.target.value;
            localStorage.setItem("note", message);
            setSavedNote(message);
          }}
          className='resize-none h-[100000px] overflow-wrap w-full font-varela  bg-transparent rounded-3xl outline-none text-amber-600 py-5 px-8 text-4xl leading-snug'
           />
        </div>
      </header>
    </div>
  );
}

export default App;
