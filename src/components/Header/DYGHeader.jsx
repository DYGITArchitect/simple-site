import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Col, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../routers';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/auth/authApi';


const DYGHeader = () => {
  const navigate = useNavigate()
  const { isAuth, username } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const menuItems = []
  isAuth ?
    menuItems.push(      
      {key: 100, label: "Выйти"}      
    )
  :
    menuItems.push(      
      {key: 1, label: "Логин"}      
    )

  const menuMainItems = [
    {key: 1, label: "Главная"},
    {key: 2, label: "Обучение"},
    {key: 3, label: "Курс"},
    {key: 4, label: "Тарифы"},
    {key: 5, label: "Обо мне"},
  ]
    
  const onClick = (e) => {
    switch(e.key) {
      case '1':
        navigate(RoutesNames.LOGIN)
        break;
      case '100':
        dispatch(logout({ username }));            
        navigate(RoutesNames.MAIN)
        break;
      default:
        navigate(RoutesNames.MAIN)
        break;
    }
  };

  const onClickMenu = (e) => {
    switch(e.key) {
      case '1':
        navigate(RoutesNames.MAIN)
        break;
      case '2':
          navigate(RoutesNames.TRAINIGLIST)
          break;
      case '3':
        if (isAuth) 
          navigate(RoutesNames.COURSELIST) 
        else 
          navigate(RoutesNames.LOGIN)         
        break;
      case '4':
        navigate(RoutesNames.STORE)
        break;
      case '5':
        navigate(RoutesNames.ABOUT)
        break;
      default:
        navigate(RoutesNames.MAIN)
        break;
    }
  }

  return(<Header>
      <Row justify="end">        
        <Col flex="auto">
        <Menu style={{minWidth: "400px"}}
              theme='dark'
              mode="horizontal"
              selectable={false}
              items={menuMainItems}
              onClick={onClickMenu}
            />
        </Col>
        <Col>
        {isAuth && <div style={{color: 'white'}}>{username}</div>}
        </Col>
        <Col flex="130px">        
          <Menu style={{minWidth: "20px"}}
            theme='dark'
            mode="horizontal"
            selectable={false}
            items={menuItems}
            onClick={onClick}
          />
        </Col>        
      </Row>      
  </Header>)
};

export default DYGHeader