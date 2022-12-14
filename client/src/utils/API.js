  //User-Routes 

  //create a User
  export const createUser = (userData) => {
    return fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  //login an existing user 
  export const loginUser = (userData) => {
    return fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

// get User by ID
export const singleUser = (userData) => {
    return fetch('/user/:userID', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
};

// Update a User's definition 
export const updateDefinition = (userData) => {
  return fetch('/user/:userID', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}; 

// Update a User's membership array (adds a group)
export const addMembership = (userData) => {
  return fetch ('/user/:id/membership/:groupID', {
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
  return fetch ('/group/:groupID', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });
};

//Create a new group 
export const createGroup = (groupData) => {
  return fetch ('/group/createGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });
};

// Update membership arrray (add user to group)
export const addMembers = (groupData) => {
  return fetch ('/:id/member/:memberID', {
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
  