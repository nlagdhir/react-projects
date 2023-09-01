import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const user = await res.json();
      setUser(user);
    } catch (error) {
      setError(true); 
    }
    setLoading(false);
  }; 

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  const { avatar_url, login, company, bio } = user;

  return (
    <div>
      <img
        src={avatar_url}
        alt={login}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <div>
        <h3>{login}</h3>
        <p>working at {company}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;
