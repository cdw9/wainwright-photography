var banner = new Array()
banner[0] = '/websites/refugechristianchurch/images/header1.jpg'
banner[1] = '/websites/refugechristianchurch/images/header2.jpg'
banner[2] = '/websites/refugechristianchurch/images/header3.jpg'
banner[3] = '/websites/refugechristianchurch/images/header4.jpg'
banner[4] = '/websites/refugechristianchurch/images/header5.jpg'
banner[5] = '/websites/refugechristianchurch/images/header6.jpg'
banner[6] = '/websites/refugechristianchurch/images/header7.jpg'
var j = 0
var p = banner.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = banner[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+banner[whichImage]+'" width="800" height="80" alt="Refuge Christian Church">');
}