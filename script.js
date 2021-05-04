var comm = document.getElementsByClassName('comm');
var user = document.getElementsByClassName('username');
var startVar = 0;
var commVar = 10;


let jsonCommentDatabase = [
  {
    "user" : "jettmain69:",
    "comm" : "do it again"
  },
  {
    "user" : "remyfamily3:",
    "comm" : "PART 2 PLS?"
  },
  {
    "user" : "xxphoenixgamerxx:",
    "comm" : "can someone tag me when part 2 is up"
  },
  {
    "user" : "hampter80:",
    "comm" : "im dropping a follow for that"
  },
  {
    "user" : "monkepower203:",
    "comm" : "LMAOOOOOOO"
  },
  {
    "user" : "toebeans340:",
    "comm" : "what happened after???"
  },
  {
    "user" : "jettmain69:",
    "comm" : "that was hilarious"
  },
  {
    "user" : "peanutbutteryum:",
    "comm" : "@jellyyumyum omg"
  },
  {
    "user" : "jellyyum:",
    "comm" : "SHEEEEEEEEEEEEEESH"
  },
  {
    "user" : "demonfoxthrowing:",
    "comm" : "yo that was crazy"
  },
  {
    "user" : "whatsgoblin386:",
    "comm" : "im sending this to my group chat lolll"
  }
];


loopComments();
function loopComments() {
    comm[10].innerHTML = comm[9].innerHTML;
    comm[9].innerHTML = comm[8].innerHTML;
    comm[8].innerHTML = comm[7].innerHTML;
    comm[7].innerHTML = comm[6].innerHTML;
    comm[6].innerHTML = comm[5].innerHTML;
    comm[5].innerHTML = comm[4].innerHTML;
    comm[4].innerHTML = comm[3].innerHTML;
    comm[3].innerHTML = comm[2].innerHTML;
    comm[2].innerHTML = comm[1].innerHTML;
    comm[1].innerHTML = comm[0].innerHTML;
    comm[0].innerHTML = jsonCommentDatabase[startVar]['comm'];
    startVar++;

    user[10].innerHTML = user[9].innerHTML;
    user[9].innerHTML = user[8].innerHTML;
    user[8].innerHTML = user[7].innerHTML;
    user[7].innerHTML = user[6].innerHTML;
    user[6].innerHTML = user[5].innerHTML;
    user[5].innerHTML = user[4].innerHTML;
    user[4].innerHTML = user[3].innerHTML;
    user[3].innerHTML = user[2].innerHTML;
    user[2].innerHTML = user[1].innerHTML;
    user[1].innerHTML = user[0].innerHTML;

    user[0].innerHTML = jsonCommentDatabase[startVar]['user'];
    if(startVar >= commVar){
      startVar = 0;
    }
    window.setTimeout(loopComments, 500);
}
