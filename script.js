var arrofcolor = ["voilet","indigo","blue","green","yellow","orange","red"];
var arrofshape = ["square","triangle","circle","rectangle"];
var btncolor = document.getElementById('changecolor');
var btnshape = document.getElementById('changeshape');

btncolor.addEventListener('click',function (){
    var randomItem = arrofcolor[Math.floor(Math.random()*arrofcolor.length)];
    var gola = document.getElementById('circlemain');
    gola.style.backgroundColor=randomItem;
    console.log('change color randomly');
})

btnshape.addEventListener('click',function(){
    var randomshape = arrofshape[Math.floor(Math.random()*arrofshape.length)];
    var aakar = document.getElementById('shape');
    aakar.className = `shape ${randomshape}`;
    console.log('change shape randomly');

})