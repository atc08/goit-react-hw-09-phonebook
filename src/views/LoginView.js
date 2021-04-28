import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth';
import s from './ViewsStyles.module.scss';

function LoginView({ onLogIn }) {
  const [email, setEmail] = useState('');

  // const updateEmail = e => {
  //   setEmail(e.target.value);
  // };

  const [password, setPassword] = useState('');

  // const updatePassword = e => {
  //   setPassword(e.target.value);
  // };

  const handleChange = useCallback(e => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    onLogIn(email, password);

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LogIn Page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">SignIn</button>
      </form>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogIn(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1>LogIn Page</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           className={s.form}
//           autoComplete="off"
//         >
//           <label className={s.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={s.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">SignIn</button>
//         </form>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = {
  onLogIn: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
