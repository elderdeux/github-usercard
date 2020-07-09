/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//   followersArray.forEach(item => {
//     axios.get(`https://api.github.com/users/${item}`)
//   .then(response => {
//     console.log(response);
//     let newCard = CardCreator(response);
//     cards.appendChild(newCard);
//   });
// });
  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["elderdeux", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell",];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
.then(response => {
  console.log(response);
  let newCard = CardCreator(response);
  cards.appendChild(newCard);
});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function CardCreator(obj) {

  // create elements

  let card = document.createElement('div');
  let cardImg = document.createElement('img');
  let cardInfo = document.createElement('div');
  let cardName = document.createElement('h3');
  let cardUserName = document.createElement('p');
  let cardLocation = document.createElement('p');
  let cardProfile = document.createElement('p');
  let gitAddress = document.createElement('a');
  let cardFollowers = document.createElement('p');
  let cardFollowing = document.createElement('p');
  let cardBio = document.createElement('p');

  // assign classes

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  // set content

  cardImg.src = obj.data.avatar_url;
  cardName.textContent = obj.data.name;
  cardUserName.textContent = obj.data.login;
  cardLocation.textContent = `Location: ${obj.data.location}`;
  cardProfile.textContent = `Profile: `;
  gitAddress.href = obj.data.html_url;
  gitAddress.textContent = obj.data.html_url;
  cardFollowers.textContent = `Followers: ${obj.data.followers}`;
  cardFollowing.textContent = `Following: ${obj.data.following}`;
  cardBio.textContent =  `Bio: ${obj.data.bio}`;

  // append

  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(gitAddress);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return card;

}

const cards = document.querySelector('.cards'); 
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
