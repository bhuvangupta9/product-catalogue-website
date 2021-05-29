db.collection("topProducts").get()
.then((querySnapshot) => {
    querySnapshot.forEach(element => {
        db.collection('Products').doc(element.data().p_id).get()
        .then((query) => {
            var wrapper1 = document.createElement('div');
            var stor_img = storage.ref().child('Product_img/' + query.data().image);
            var immg;
            wrapper1.classList.add('wrapper1');
            stor_img.getDownloadURL()
            .then((url) => {
            wrapper1.innerHTML = '<div class="container1"><div class="top1"><img src="'+ url + '" ></div><div class="bottom1"><div class="left1"><div class="details1"><h4>' + query.data().name + '</h4></div></div></div></div><div class="inside1"><div class="icon1"><i class="fa fa-info-circle" aria-hidden="true"></i></div><div class="contents1"><table><tr><th>Flavour</th></tr><tr><td>' + query.data().flavour + '</td></tr><tr><th>Quantity</th></tr><tr><td>' + query.data().quantity + '</td></tr><tr><th>MRP</th></tr><tr><td>' + query.data().mrp + '</td></tr></table></div> </div>';
            document.getElementById('products1').append(wrapper1);
            })
            .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                // File doesn't exist
                break;
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
                case 'storage/canceled':
                // User canceled the upload
                break;
            
                // ...
            
                case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
            });      
            
        });
    });
});

db.collection('Products').orderBy('timestamp', 'desc').limit(6).get()
.then((querysnapshot) => {
    querysnapshot.forEach(element => {
        var wrapper1 = document.createElement('div');
        var stor_img = storage.ref().child('Product_img/' + element.data().image);
        var immg;
        wrapper1.classList.add('wrapper1');
        stor_img.getDownloadURL()
        .then((url) => {
          wrapper1.innerHTML = '<div class="container1"><div class="top1"><img src="'+ url + '" ></div><div class="bottom1"><div class="left1"><div class="details1"><h4>' + element.data().name + '</h4></div></div></div></div><div class="inside1"><div class="icon1"><i class="fa fa-info-circle" aria-hidden="true"></i></div><div class="contents1"><table><tr><th>Flavour</th></tr><tr><td>' + element.data().flavour + '</td></tr><tr><th>Quantity</th></tr><tr><td>' + element.data().quantity + '</td></tr><tr><th>MRP</th></tr><tr><td>' + element.data().mrp + '</td></tr></table></div> </div>';
          document.getElementById('products2').appendChild(wrapper1);
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              break;
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
        
            // ...
        
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
            }
        });
    });
});