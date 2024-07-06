import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Импортируем компонент Link из React Router
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhoneImage from '../../img/phone_image.png'; // Замените путь на вашу картинку

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Добавьте здесь логику обработки отправки формы, например, отправку данных на сервер
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <Box
        sx={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              background: '#fff',
              padding: 4,
              borderRadius: 4,
              boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom align="center" color="textPrimary">
              INCCONITO MEET
            </Typography>
            <form onSubmit={this.handleSubmit} style={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                Login
              </Button>
            </form>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '16px' }}>
  Don't have an account? <Link to="/register">Register</Link>
</Typography>
          </Box>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            right: '1px',
            top: '50%',
            transform: 'translateY(-50%) perspective(1000px) rotateY(15deg)',
            '@media (max-width: 600px)': {
              display: 'none',
            },
          }}
        >
          <img src={PhoneImage} alt="Phone" style={{ maxWidth: '70%', height: 'auto' }} />
        </Box>
      </Box>
    );
  }
}
