function checkEmail() {
  const email = prompt("Please enter your name:", "Harry Potter");
  if (email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    alert(`your email is now hidden\n ***********`)
  }
  else{
    alert("invalid email")
  }
  // alert(
  //   email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  //     ? `your email is now hidden\n ***********`
  //     : "wrong input"
  // );
}
checkEmail();
