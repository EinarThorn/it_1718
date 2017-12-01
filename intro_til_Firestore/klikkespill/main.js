firebase.initializeApp({
    apiKey: "AIzaSyB8rbwQaEy0mV5a02VzQtlyu4srsUOzbeI",
    authDomain: "klikkespillet2.firebaseapp.com",
    projectId: "klikkespillet2"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();




var navnE = document.querySelector('.navn');
var start = document.querySelector('.start');
var klikkE = document.querySelector('.klikk');
var klikkverdiE = document.querySelector('.klikkverdi');
var listeE = document.querySelector('.poengliste');

var antKlikk = 0;

klikkE.addEventListener('click', function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk

});

klikkE.addEventListener('click', function () {
       antKlikk = 0;
       klikkverdiE.innerHTML = antKlikk;

       setTimeout(function () {
           db.collection("spill").add({
               navn: navnE.value,
               poeng: antKlikk
           });

           alert("antKlikk");

       },300);
});
var mappe = db.collection('spill').orderBy('poeng', 'desc').limit(20);


mappe.onSnapShot(function (data) {
    var dokumenter = data.docs;
    for(var x in dokumenter){
        listeE.innerHTML += "<li>"+ dokumenter[x].data().navn+ ": "+dokumenter[x].data().poeng + "</li>"
    }
});
 







