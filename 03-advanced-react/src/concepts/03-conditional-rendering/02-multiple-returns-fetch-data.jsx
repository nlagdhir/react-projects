import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
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

    fetchUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <div>
        <h3>{user.login}</h3>
        <p>working at {user.company}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;
