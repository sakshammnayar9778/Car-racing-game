canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
car1_width = 100;
car1_height = 90;
car1_image ="car1.png";
car1_x = 10;
car1_y = 10;


car2_width=120;
car2_height = 70;
car2_image = "car2.png" ;
car2_x = 20;
car2_y = 20;



function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
		background_imgTag.src = background_image;   
	
	car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar1; 
	car1_imgTag.src = car1_image;   
    
	car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;  
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			upcar1();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			downcar1();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			leftcar1();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			rightcar1();
			console.log("right");
		}

   
		if(keyPressed == '88')
		{
			upcar2();
			console.log("up");
		}
		if(keyPressed == '65')
		{
			downcar2();
			console.log("down");
		}
		if(keyPressed == '68')
		{
			leftcar2();
			console.log("left");
		}
		if(keyPressed == '87')
		{
			rightcar2();
			console.log("right");
		}

	}
         

function car1up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();
			}
}
function car1down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}