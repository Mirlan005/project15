import React, { Component } from 'react';

class Profcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [] // Здесь будут храниться новости
    };
  }

  // Загрузка новостей при монтировании компонента
  componentDidMount() {
    // Здесь может быть логика загрузки новостей, например, запрос к API
    // Примерно так:
    fetch('https://api.example.com/news')
      .then(response => response.json())
      .then(data => this.setState({ news: data }));
  }

  render() {
    return (
      <div>
        <h2>Новости</h2>
        {/* Отображаем новости */}
        <ul>
          {this.state.news.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Profcard;
