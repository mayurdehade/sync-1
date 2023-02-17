function Verify() {
    var userRef = "MayurDehade";
    var passRef = "Mayur123"

    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if(user == userRef || pass == passRef) {
        alert("Login Successful!");
    } else {
        alert("It's seem you make a mistake...");
    }
};