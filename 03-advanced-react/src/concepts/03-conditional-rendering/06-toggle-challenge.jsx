import { useState } from "react";

const ToggleChallenge = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <Profile />
      ) : (
        <h2>You are not loggedin, click button to login</h2>
      )}
      <button className="btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const Profile = () => {
  return <h2>Hello User! You are loggedin.</h2>;
};

export default ToggleChallenge;
