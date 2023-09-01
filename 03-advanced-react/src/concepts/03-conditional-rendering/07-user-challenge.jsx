import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: "nilesh",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={handleLogout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={handleLogin}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
