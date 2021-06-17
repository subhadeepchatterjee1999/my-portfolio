import logo from './logo.svg';
import './App.css';

import Section1 from './components/section1/section1.js';
import Section2 from './components/section2/section2.js';
import Section3 from './components/section3/section3.js';
import Section4 from './components/section4/section4.js';
import Section5 from './components/section5/section5.js';
function App() {
  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  );
}

export default App;
