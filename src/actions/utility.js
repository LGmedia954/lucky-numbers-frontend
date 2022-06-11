// Direct scribe to the DOM.

export const showId = (id) => {
  const showId = document.getElementById('id').innerHTML = `'${this.id}'`
};

export const showEmail = (email) => {
  const showEmail = document.getElementById("email").innerHTML = `"${this.email}"`
};

export const showUsername = (username) => {
  const showUsername = document.getElementById("username").innerHTML = `"${this.username}"`
};

export const showUserId = (id) => {
  const showUserId = document.getElementById("user_id").innerHTML = `"${this.id}"`
};

// showId();
// showEmail();
// showUsername();
// showUserId();

// showId(this.state.id);
// showEmail(this.state.email);
// showUsername(this.state.username);
// showUserId(this.state.id);

// {/* <div>
// <h3 id='id'></h3>
// <h3 id="email"></h3>
// <h3 id="username"></h3>
// <h3 id="user_id"></h3>
// </div> */}