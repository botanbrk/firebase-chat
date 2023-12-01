import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Chat from "./pages/Chat";

function App() {
  const [ isAuth, setIsAuth ] = useState();
  const [ room, setRoom ] = useState(null);

  useEffect(() => {
    // onAuthStateChanged > auth objesinin değişimini izler 
    // kullanıcının giriş ve çıkış işlemşnde tetiklenir
    // çalıştırdığı fonsiyonu aktif kullanıcı varsa gönderir
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsAuth(true);
      } else{
        setIsAuth(false);
      }
    
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value); 
  }
  

// kullanıcının oturumu kapalıysa login sayfasını ekrana bas
  if(isAuth === false){
    return(
      <div className="container">
  <AuthPage />
  </div>
    );
  }

// kullanıcının oturumu açıksa >
  return (
  <div className="container">
    
    {room ? 
     /* oday belirdeyise bura çalışır */
    <Chat room={room} setRoom={setRoom} /> : 
      // odayı henüz belirlemediyse bura çalışır.
      <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi odaya gireceksiniz?</p>
      <input required placeholder="örn:haftasonu" type="text" />
      <button className="submit">Odaya Gir</button>
      <button className="button">Çıkış Yap</button>
    </form>
    }
  
  </div>
 
  );
}

export default App;
