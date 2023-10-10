import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="App">
       <tbody>
        <tr>
          <th>Profile pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td><img src={item.image} alt="" height={100} /></td>
            <td>{item.firstName}</td>
            <td>
              {item.lastName}
            </td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.username}</td> 
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>

          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;
