document.addEventListener("DOMContentLoaded", event =>{

  const app = firebase.app()
  console.log("Its Me")

})

function googleLogin(){
  const provider = new firebase.auth.GoogleAuthProvider()
 firebase.auth().signInWithPopup(provider)
  .then( result => {
    const user = result.user
    document.write(`Hello ${user.displayName}`);
  }

  )
}