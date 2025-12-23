document.querySelector(".btn").addEventListener("click", function () {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password").value;
  console.log(email);
  console.log(password);
  fetch('http://localhost:3000/new',{
    method:'POST',
    headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    email:email,
    password:password
  })
  })
});
