function Validate() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    console.log(password2);
    console.log(password1);
    if (password1 != password2) {
        alert("პაროლები არ ემთხვევა შეიყვანეთ თავიდან");
        // console.log(password2);
        // console.log(password1);
        return false;
    }
    document.write('registered succesfully')
    return true;
}