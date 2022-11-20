var preloader = document.getElementById("loader");
        function preLoader() {
            preloader.style.display = "none";

        }

const firebaseConfig = {
    apiKey: "AIzaSyB7YE_AeEMUc_TtVpbuW7sTQ9ccW2YWwjY",
    authDomain: "reg-form-cd759.firebaseapp.com",
    databaseURL: "https://reg-form-cd759-default-rtdb.firebaseio.com",
    projectId: "reg-form-cd759",
    storageBucket: "reg-form-cd759.appspot.com",
    messagingSenderId: "742824896353",
    appId: "1:742824896353:web:93482252a6553f416a8720"
};

firebase.initializeApp(firebaseConfig);

var passthemicDB = firebase.database().ref('passthemic');

document.getElementById('passthemic').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var first = getElementVal("first");
    var last = getElementVal("last");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");

    saveMessages(first, last, emailid, phone, msgContent);

    document.getElementById("passthemic").reset();

}

const saveMessages = (first, last, emailid, phone, msgContent) => {
    var newpassthemic = passthemicDB.push();

    newpassthemic.set({
        first: first,
        last: last,
        emailid: emailid,
        phone: phone,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

