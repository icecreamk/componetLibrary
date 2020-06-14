import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>类型</p>
        <Button onClick={() => {console.log(1)}} btnType={'primary'}>Primary</Button>
        <Button className="test" btnType={'danger'}>Danger</Button>
        <Button btnType={'link'} href="http://www.baidu.com" target="_blank">Link</Button>
        <Button btnType={'default'}>Default</Button>
        <p>大小</p>
        <Button btnType={'primary'} size={'lg'}>Primary</Button>
        <Button btnType={'primary'} size={'sm'}>Primary</Button>
      </header>
    </div>
  );
}

export default App;
