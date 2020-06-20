import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div>
        <p>类型</p>
          <Button onClick={() => {console.log(1)}} btnType={'primary'}>Primary</Button>
          <Button className="test" btnType={'danger'}>Danger</Button>
          <Button btnType={'link'} href="http://www.baidu.com" target="_blank">Link</Button>
          <Button btnType={'default'}>Default</Button>
          <p>大小</p>
          <Button btnType={'primary'} size={'lg'}>Primary</Button>
          <Button btnType={'primary'} size={'sm'}>Primary</Button>
      </div>
      <div>
        <Menu defaultIndex={'0'}>
          <MenuItem index={'0'}>
            1
          </MenuItem>
          <MenuItem index={'1'}>
            2
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default App;
