document.getElementById('cal').addEventListener('click', Calculate)

let radiusn = 0
let diametern = 0
let pien = 0 
let rad2 = 0
let areao = 0
let ciro = 0

function Calculate () {
  diametern = document.getElementById('diameterin').value
   
  diametern = parseFloat(diametern)
  radiusn = parseFloat(radiusn)
  pien = parseFloat(pien)
  rad2 = parseFloat(rad2)
  areao = parseFloat(areao)
  ciro = parseFloat(ciro)

  radiusn = ( diametern / 2 )

  pien = (3.14)
  
  /* The code below is the calculation for the 
  area of the circle */

  rad2 = (radiusn * radiusn)

  areao = (pien*rad2)
 
  document.getElementById('anwserbox1').innerHTML = areao


  /* The code below is the calculation of the  circimfrance of a circle.*/

  ciro = (pien * radiusn * 2)

  document.getElementById('anwserbox2').innerHTML = ciro
}