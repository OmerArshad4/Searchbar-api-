/* eslint-disable array-callback-return */
import React from 'react';
import { useState } from 'react';
import { debounce } from 'lodash';
// import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {
  Gridbox,
  GridData,
  UserName,
  DivContainer,
  DataItem,
} from './Main.styled.js';
// import { Grid } from '@mui/material';

import './Main.styled.js';

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [input, setInput] = useState('');
  // const [output, setOutput] = useState([]);

  const getUsers = async (input) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${input}%20`
    );
    const data = await response.json();
    setUserData(data.items);
  };
  // console.log('user', userData);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // useEffect(() => {
  //   setOutput([...userData])
  //  userData.filter(items => {
  //   if(items.login.toLowerCase().includes(input.toLowerCase()))
  //   {
  //     setOutput(output=>[...output,items])
  //   }
  //  })

  // },[input]);

   

   

  const changeHandler = (event) => {
    getUsers(event.target.value);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = React.useCallback(
    debounce(changeHandler, 250),
    []
  );

  return (
    <DivContainer>
      <GridData container>
        <input
          label="fullWidth"
          id="fullWidth"
          type="text"
          style={{
            background: 'black',
            padding: 13,
            width: 250,
            color: 'white',
            borderRadius: 22,
          }}
          onChange={debouncedChangeHandler}
        />{' '}
        
        {userData
          // .filter((post) => {
          //   if (input === '') {
          //     return post;
          //   } else if (post.login.toLowerCase().includes(input.toLowerCase())) {
          //     return post;
          //   }
          // })
          ?.map((data) => {
            return (
              <DataItem>
                <Gridbox item>
                  <Avatar alt="Cindy Baker" src={data.avatar_url} />
                  <UserName style={{ color: 'white' }}>{data.login}</UserName>
                </Gridbox>
              </DataItem>
            );
          })}
      </GridData>
    </DivContainer>
  );
};

export default Main;
