import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'

library.add(fas) // 将所有图标引入，无需一个个引用

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <FontAwesomeIcon icon="arrow-down" />
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
        <Menu defaultIndex={'2-1'} mode="horizontal" defaultOpenSubMenus={['2']}>
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
      <div>
        <Icon icon="coffee" theme="danger" size="10x" />
      </div>
    </div>
  );
}

export default App;
