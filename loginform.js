document.querySelector(".btn1").addEventListener("click",function(e){
 e.preventDefault(); 
  const value3=document.getElementById("A-email-input");
  const value4=document.getElementById("A-password-input");
  const email1=value3.value;
  const password1=value4.value;
  console.log(email1);
  console.log(password1);
  fetch('http://localhost:3000/submit1',{
    method:'POST',
    headers:{'content-Type':'application/json'},
    body:JSON.stringify({email1,password1})
  })
});