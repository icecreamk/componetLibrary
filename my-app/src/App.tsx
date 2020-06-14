import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">baidu link</Button>
      </header>
    </div>
  );
}

export default App;
