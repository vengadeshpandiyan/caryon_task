import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';

function App() {
  const [users, setUsers] = useState()
  useEffect(() => {
    axios.get('https://randomuser.me/api')
      .then(res => {
        console.log(res.data.results);
        setUsers(res.data.results)
      }, err => {

        console.log(err);
      })
  }, [])
  return (
    <div className="App">
      <>
        {users && users.map((e) => {
          return (
            <>
              <div className='card' >
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='avatar'>
                    <img src={e.picture.thumbnail} alt="" />
                  </div>
                  <div className='user_content'>
                    <h3>{e.name.first} {e.name.last}</h3>
                    <div className='d-flex'>
                      <p><LocationOnIcon /><span style={{marginLeft:"10px"}}>{e.location.country}</span></p>
                      <p><LinkIcon /><span style={{marginLeft:"10px"}}>{e.email}</span></p>
                    </div>
                  </div>
                  <div className='button'>
                    <button type="button" class="btn btn-primary">View Profile</button>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </>
    </div>
  );
}

export default App;
