// Fetch user data from public API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const userList = document.getElementById('userList');

    // Limit to 5 users only for clean output
    const usersToShow = data.slice(0, 5);

    usersToShow.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';
      userDiv.innerHTML = `<strong>Name:</strong> ${user.name}<br>
                           <strong>Email:</strong> ${user.email}`;
      userList.appendChild(userDiv);
    });
  })
  .catch(error => {
    console.error('API Error:', error);
  });
