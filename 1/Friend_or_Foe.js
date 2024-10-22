function friend(friends) {
  const myFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}

// or

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

//or

const friend = (friends) => friends.filter((friend) => friend.length == 4);
