import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>类型</p>
        <Button onClick={() => {console.log(1)}} btnType={ButtonType.Primary}>Primary</Button>
        <Button className="test" btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <p>大小</p>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
      </header>
    </div>
  );
}

export default App;
