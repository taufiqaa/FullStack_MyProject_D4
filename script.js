function getData(){

    let name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let email_receiver = "example-mail@gmail.com"  
    let a = document.createElement('a');
    console.log(a);
    a.href = `mailto:${email_receiver}?subject=${subject}&body=Hello, I am ${name}, I would like to invite you for ${subject}, ${message}, for further information you can call me at ${phone}.`

    if(!name && !email && !phone && !message){
        alert("All fields are required");
    }else if(!name){
        console.log("Name is empty");
        alert("Name is required");
    } else if(!email){
        console.log("Email is empty");
        alert("Email is required");
    }else if(!phone){
        console.log("Phone is empty");
        alert("Phone Number is required");
    }else if(!message){
        console.log("Message is empty");
        alert("Message is required");
    }else{
     a.click();
    }
}