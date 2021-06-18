$(document).ready(function() {
	$("body").keydown(function(e) {
		if (e.which == 37) {
			alert("left");
		} else if (e.which == 39) {
			alert("right");
		}
	});
});

image_array = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg'
]
function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index]

    document.getElementById('001').src = './images/${selected_image}'
}