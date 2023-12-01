import { auth } from "../firebase/firebaseConfig"
const Message = ({ msg }) => {

    // mesajı gönderen kişi oturumunu açık olan kişiyle eşleşirse ekrana bas.
    if(msg.user?.uid === auth.currentUser.uid){
        return <p className="msg-user"> {msg.text} </p>
    }

    // mesajı başkası gönderdiyse >
  return (
    <div className="msg-outher">
        <p className="user-ino">
            <img src={msg.user.photo}  />
            <span> {msg.user.name}: </span>

        </p>
        <p className="msg-text"> {msg.text} </p>
    </div>
  )
}

export default Message
