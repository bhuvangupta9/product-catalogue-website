var firebaseConfig = {
    apiKey: "AIzaSyAsJH-eJnCiWPaDl_a9yGbZNPRce0NDE0c",
    authDomain: "shree-ram-enterprise.firebaseapp.com",
    projectId: "shree-ram-enterprise",
    storageBucket: "shree-ram-enterprise.appspot.com",
    messagingSenderId: "1005653195214",
    appId: "1:1005653195214:web:f1fe4334e700c9725e139f",
    measurementId: "G-9BYF3ZV4V3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
var storage = firebase.storage();

var brand_list = document.getElementById('brand_list');

db.collection('Brand').get()
.then((doc) => {
    doc.forEach(element => {
        var li = document.createElement('li');
        li.innerHTML = '<a class="dropdown-item" href="./brand/'+ element.id +'">' + element.data().name + '</a>';
        brand_list.appendChild(li);
    })
})