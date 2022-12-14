// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

  //create a User
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  //login a user
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  //Update a user
  export const updateUser = (userData) => {
    return fetch('/api/users', {
        method: 'PUT',
        headres: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
  }; 

  //create a Group 
          //Make the only thing required for a group the name? 
          export const createGroup = (groupData) => {
            return fetch('/api/group', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(groupData),
            });
          };

  //join a Group // need both of these put requests happening in same function 
          // PUT request to update the array of members in a group 
          export const addToMembers = (userData) => {
            return fetch('/api/group', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
          };

          //PUT request to update the array of groups in a user's memberships 
              export const addToMemberships = (groupData) => {
                  return fetch('/api/group', {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(groupData),
                  });
              };

//  // Use this example for job board query API  (from HW21)
//   // make a search to google books api
//   // https://www.googleapis.com/books/v1/volumes?q=harry+potter
//   export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//   };
  