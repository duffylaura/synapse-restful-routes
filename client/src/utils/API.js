  // import {useState, useEffect} from 'react'

  // export function CreateUser() {
  //   useEffect(()=>{
  //     fetch('/api/user/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify()
  //     })
  //     .then(res => res.json())
  //   }, [])
  // }

  // User-Routes 

  //create a User
  export const createUser = (userData) => {
    return fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  //login an existing user 
  export const loginUser = (userData) => {
    return fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

// get User by ID
export const singleUser = (userData) => {
    return fetch('/api/user/:userID', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
};

// Update a User's definition 
export const updateDefinition = (userData) => {
  return fetch('/api/user/:userID', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}; 

// Update a User's membership array (adds a group)
export const addMembership = (userData) => {
  return fetch ('/api/user/:id/membership/:groupID', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// GROUP ROUTES

// Get a group by ID 
export const singleGroup = (groupData) => {
  return fetch ('/api/group/:groupID', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });
};

//Create a new group 
export const createGroup = (groupData) => {
  return fetch ('/api/group/createGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });
};

// Update membership arrray (add user to group)
export const addMembers = (groupData) => {
  return fetch ('/api/:id/member/:memberID', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  })
}


//  // Use this example for job board query API  (from HW21)
//   // make a search to google books api
//   // https://www.googleapis.com/books/v1/volumes?q=harry+potter
//   export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };
  