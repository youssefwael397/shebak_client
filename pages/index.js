import styles from "../styles/Stream.module.css";
import StreamVideo from "../components/StreamVideo";
import io from 'socket.io-client';
import { useEffect, useState } from "react";


const Stream = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("message");

  useEffect(() => {
    const newSocket = io(`http://localhost:5000`, {
      reconnectionDelay: 10000,
      // reconnectionDelayMax: 15000
    });
    console.log(newSocket);
    setSocket(newSocket);
    // return () => newSocket.close();
  }, []);

  useEffect(() => {
    // socket.on()
  },[socket])

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      // console.log(socket)
      console.log(message)
      socket.emit('json', { "message": message })
    }
  };

  return (
    <div className={`${styles.stream} py-5`}>
      <div className="container">
        <div className={` ${styles.cont_video} bg-white rounded-4 p-5 mt-4`}>
          <div className="d-flex justify-content-center mx-auto">
            <StreamVideo />
          </div>
        </div>
      </div>

      {socket ? (
        <div className="chat-container mt-3">
          <form>
            <input
              value={message}
              placeholder="Type your message"
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
            <button type="submit" onClick={sendMessage}>Send</button>
          </form>
        </div>
      ) : (
        <div>Socket Not Connected</div>
      )}
    </div>
  );
};

export default Stream;
