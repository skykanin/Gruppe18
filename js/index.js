
let ubtn = document.getElementById('usernamebtn'),
    nameinput = document.getElementById('nameinput');

ubtn.onclick = () => {
    console.log(nameinput.value);
    main.changeUsername(nameinput.value);
    main.reloadPage();
}