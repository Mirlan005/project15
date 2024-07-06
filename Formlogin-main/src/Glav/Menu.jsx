import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Импортируем BrowserRouter и Route
import { faHome, faNewspaper, faEnvelope, faUserFriends, faUsersCog, faMusic, faGamepad, faStickyNote, faStoreAlt, faCog, faCreditCard, faBookmark, faFileAlt, faBullhorn, faHandshakeAltSlash, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Router> {/* Оборачиваем компонент в Router */}
        <div className={`menu ${this.state.open ? 'open' : ''}`}>
          <ul>
            <li><FontAwesomeIcon icon={faHome} /><Link to="/home">Моя страница</Link></li>
            <li><FontAwesomeIcon icon={faNewspaper} /><Link to="/news">Новости</Link></li>
            <li><FontAwesomeIcon icon={faEnvelope} /><Link to="/messages">Мессенджер</Link> <span></span></li>
            <li><FontAwesomeIcon icon={faUserFriends} /><Link to="/friends">Друзья</Link> <span>5</span></li>
            <li><FontAwesomeIcon icon={faUsersCog} /><Link to="/communities">Сообщества</Link> <span>11</span></li>
            <li><FontAwesomeIcon icon={faMusic} /><Link to="/music">Музыка</Link></li>
            <li><FontAwesomeIcon icon={faGamepad} /><Link to="/games">Игры</Link> <span>1</span></li>
            <li><FontAwesomeIcon icon={faStickyNote} /><Link to="/stickers">Стикеры</Link></li>
            <li><FontAwesomeIcon icon={faStoreAlt} /><Link to="/market">Маркет</Link></li>
            <li><FontAwesomeIcon icon={faCog} /><Link to="/services">Сервисы</Link></li>
            <li><FontAwesomeIcon icon={faCreditCard} /><Link to="/vk-pay">Pay</Link></li>
            <li><FontAwesomeIcon icon={faBookmark} /><Link to="/bookmarks">Закладки</Link></li>
            <li><FontAwesomeIcon icon={faFileAlt} /><Link to="/files">Файлы</Link></li>
            <li><FontAwesomeIcon icon={faBullhorn} /><Link to="/ads">Реклама</Link></li>
            <li><FontAwesomeIcon icon={faHandshakeAltSlash} /><Link to="/management">Управление</Link></li>
            <li><FontAwesomeIcon icon={faQuestionCircle} /><Link to="/help">Помощь</Link></li>
          </ul>
        </div>
      </Router>
    );
  }
}
