var firebaseConfig = {
    //firebase config...
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
        li.innerHTML = '<a class="dropdown-item" href="../brand/'+ element.id +'">' + element.data().name + '</a>';
        brand_list.appendChild(li);
    })
})
