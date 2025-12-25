document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault(); 
        const value1 = document.getElementById("email-input");
        const value2 = document.getElementById("password");
        const email=value1.value;
        const password=value2.value;
        console.log(email);
        console.log(password);
        fetch('http://localhost:3000/submit',{
          method:'POST',
          headers:{'content-Type':'application/json'},
          body:JSON.stringify({email,password})
        })
      });
