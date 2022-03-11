import { useState } from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import SingleAccordion from './components/SingleAccordion';
import data from './data/data'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [content,setContent] = useState(data)
  
  return (
    <>
    <main>
      <div className='container'>
        <h1 className='title'>Accordion App</h1>
        <section>
          {content.map((e)=> {
            return <SingleAccordion key={e.id} {...e}/>
          })}
        </section>
      </div>
    </main>
    <FooterComponent/>
    </>
  );
}

export default App;
