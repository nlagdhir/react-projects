import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [usres, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetch(url);
        setUsers(await data.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();

    // const data = fetch(url).then(response => {
    //     response.json();
    // }).then()

    // const data = fetch(url).then(data => {

    // })
  }, []);

  return (
    <>
      <section>
        <h3>Github Users</h3>
        <ul className="users">
          {usres.map((user) => {
            const { id, avatar_url, login, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h3>{login}</h3>
                  <a href={html_url} target="_blank" rel="noreferel">
                    Profile 
                  </a>
                </div> 
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default FetchData;
