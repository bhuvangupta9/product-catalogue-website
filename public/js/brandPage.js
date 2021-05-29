var bbanner = document.getElementById('Brandbanner');
var blogo = document.createElement('div');
var bimg = document.createElement('img');
var babout = document.createElement('div');
var aboutb = document.createElement('div');
var aboutl = document.createElement('div');
var pp = document.createElement('p');
var aa = document.createElement('a');
var stor_logo;
var brandname;

blogo.classList.add("Brandlogo");
babout.classList.add("aboutbrand");
aboutb.classList.add("aboutb");
aboutl.classList.add("aboutl");


db.collection('Brand').doc( window.location.pathname.slice(window.location.pathname.lastIndexOf('/')+1, window.location.pathname.length)).get()
.then((doc) => {
    pp.innerHTML = doc.data().name;
    brandname = doc.data().name;
    aa.href = doc.data().web;
    aa.innerHTML = "Official Website";
    aa.target = "_blank";
    stor_logo = storage.ref().child('Brand_logo/' + doc.data().logo );
    stor_logo.getDownloadURL()
    .then((url) => {
        bimg.src = url;
        blogo.appendChild(bimg);
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

    //Products....
    db.collection('Products').where("Brand", "==", brandname).get()
    .then((querysnapshot) => {
      querysnapshot.forEach(element => {
        var wrapper1 = document.createElement('div');
        var stor_img = storage.ref().child('Product_img/' + element.data().image);
        var immg;
        wrapper1.classList.add('wrapper1');
        stor_img.getDownloadURL()
        .then((url) => {
          wrapper1.innerHTML = '<div class="container1"><div class="top1"><img src="'+ url + '" ></div><div class="bottom1"><div class="left1"><div class="details1"><h4>' + element.data().name + '</h4></div></div></div></div><div class="inside1"><div class="icon1"><i class="fa fa-info-circle" aria-hidden="true"></i></div><div class="contents1"><table><tr><th>Flavour</th></tr><tr><td>' + element.data().flavour + '</td></tr><tr><th>Quantity</th></tr><tr><td>' + element.data().quantity + '</td></tr><tr><th>MRP</th></tr><tr><td>' + element.data().mrp + '</td></tr></table></div> </div>';
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
    })
    .catch((e) => {
      console.log(e);
    });
})

aboutb.appendChild(pp);
aboutl.appendChild(aa);
babout.appendChild(aboutb);
babout.appendChild(aboutl);
bbanner.appendChild(blogo);
bbanner.appendChild(babout);

