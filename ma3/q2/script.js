/*There is an author.json file in the folder. Console.log each of the elements inside this JSON file that is id, name, URL, author and each element inside the data array. You can make use of a for loop here. */

	var video = [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]



for (var key in video) {
    if (video.hasOwnProperty(key)) {
        console.log("ID: " + video[0].id);
        console.log("Name: " + video[0].name);
        console.log("URL: " + video[0].url);
        console.log(video[0].author);
       }
    
};

/*
for ( key in video) {
    if (video.hasOwnProperty(key)) {
        console.log(video[0].id);
        console.log(video[0].name);
        console.log(video[0].url);
        console.log(video[0].author);
    }
};

console.log("ID: " + video[0].id);
        console.log("Name: " + video[0].name);
        console.log("URL: " + video[0].url);
        console.log("Author " + video[0].author); */









//    for (i = 0; i < videoInfo.video.lenght; i++)
  //  console.log(videoInfo.video.length);


///* Object.keys()
   /* Returns an array containing the names of all of the given object's own enumerable string properties.*/