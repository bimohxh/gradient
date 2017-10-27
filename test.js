
	var c = document.getElementById('degcanvas')
	var ctx = c.getContext('2d')
					ctx.translate(150, 150);
   var canw = 300   
function draw (val) {

ctx.clearRect(-150,-150,c.width, c.height)

ctx.font = "48px serif";
ctx.textAlign = "center"
	ctx.rotate(Math.PI);

						  ctx.fillText(val, 0, 0);
					
ctx.beginPath()
					 for (var i=0; i<= 180; i++) {
						 ctx.restore()
						 ctx.save()
						 if ( i > val / 360 * 180) {
						  ctx.fillStyle = '#FFF'
						 } else {
						    ctx.fillStyle = 'red'
						 }
						 if(i > 0) {
						   ctx.rotate(Math.PI * 2  /  180 * i);
						 } else {
							 //ctx.rotate(Math.PI);
						 }
							ctx.fillRect(0, 100, 1, 40)
					 }
}			

draw(0)
	

	function move (event) {
	 var x = event.pageX - c.getBoundingClientRect().left;
 var y = event.pageY - c.getBoundingClientRect().top;
	var deg = 0
	if (x > canw / 2) {
		deg = (Math.min(1, y * 1.00 / canw)) * 180
	} else {
	  deg = 180 + (Math.min(1, (canw - y)* 1.00 / canw)) * 180
	}
	console.log(deg, x,y)
		draw(parseInt(deg)) 
	
	}

	c.addEventListener('mousedown', function(event) {	
	
c.addEventListener('mousemove', move,false);


	})

c.addEventListener('mouseup', function(event) {	
		c.removeEventListener('mousemove', move)
	})