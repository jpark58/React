import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [acitivites, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {acitivites.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
