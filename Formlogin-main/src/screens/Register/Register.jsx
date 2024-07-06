import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';
import firestore from '../../config/firestore';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      age: '',
      phoneNumber: '',
      description: '',
      gender: '',
      seeking: '',
    };
  }

  async componentDidMount() {
    try {
      const usersCollection = collection(firestore, 'users');
      const querySnapshot = await getDocs(usersCollection);

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.age && userData.email && userData.gender && userData.password && userData.phoneNumber && userData.preferences && userData.username) {
          this.setState({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            age: userData.age,
            phoneNumber: userData.phoneNumber,
            description: userData.preferences,
            gender: userData.gender,
            seeking: '', // Нужно уточнить, где в вашей структуре хранится это значение
          });
        }
      });
    } catch (error) {
      console.error('Error getting user data:', error);
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const usersCollection = collection(firestore, 'users');
      await addDoc(usersCollection, {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        phoneNumber: this.state.phoneNumber,
        description: this.state.description,
        gender: this.state.gender,
        seeking: this.state.seeking,
      });
      this.setState({
        username: '',
        email: '',
        password: '',
        age: '',
        phoneNumber: '',
        description: '',
        gender: '',
        seeking: '',
      });
      console.log('Data has been successfully submitted to Firestore.');

      // Перенаправление на страницу Home после успешной регистрации
      this.props.history.push('/home');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
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
              Register
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
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
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
              <TextField
                margin="normal"
                fullWidth
                id="age"
                label="Age"
                name="age"
                value={this.state.age}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                fullWidth
                select
                label="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.handleInputChange}
                variant="outlined"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                select
                label="Seeking"
                name="seeking"
                value={this.state.seeking}
                onChange={this.handleInputChange}
                variant="outlined"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="any">Any</MenuItem>
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
              >
                Register
              </Button>
            </form>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '16px' }}>
              Already have an account? <Link to="/login">Login</Link>
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
        </Box>
      </Box>
    );
  }
}

export default withRouter(Register);

