var canvas = new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("https://lh3.googleusercontent.com/proxy/Cdtve_kEWYCIpKkif7x5945fBy4qxcaY9lu7PH50PRe9Xq7st1UDQNHh9ZuJbIBaTHiX4JYPMxUIVUK7bCXh6bCVj_BnVU4qvE0pDx8G_QlzxPmkKUSXHLW3p_tNE7zAe0Jv7ehY-r2Z_Q", function (Img) {
        player_object = Img; 
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_image_object);
    });
}