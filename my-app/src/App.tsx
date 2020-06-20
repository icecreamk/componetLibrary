import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

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
        <Menu defaultIndex={'2-1'} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            1
          </MenuItem>
          <MenuItem>
            2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              1
            </MenuItem>
            <MenuItem>
              2
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default App;
