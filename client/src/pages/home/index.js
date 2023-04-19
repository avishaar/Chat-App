import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; 
import Logo from '../img/tti-trade.png';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate(); 

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
          
          <h1 
            className={styles.homeTitle}>
            <img src={Logo} alt="" />
            Student Chat Room
          </h1> 
          <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option> Select Room </option>
          <option value='assignment'>Assignment Help</option>
          <option value='general'>General</option>
          <option value='resources'>Resources</option>
          <option value='random'>Random</option>
        </select>

        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;