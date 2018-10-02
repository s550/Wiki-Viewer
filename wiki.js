var value = "";

var query = "";

var storage = {

};

var pages = "";

 var id = "";

var input = $('.entry');

var results = "";

var pageid = [];

var title = [];

var random = {};



$('.entry').on('keypress',function(event){
	if(event.which === 13){
		broom();
		
		 value = input.val();
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="+ value + "&prop=revisions&rvlimit=10&rvprop=content&list=allpages&apfrom=" + value + "&aplimit=10&alprop=ids|title&format=json",function(data){
			storage = data;
			
      pages = storage.query.pages;
			
			id = pages[Object.keys(pages)[0]];
			
			results = storage.query.allpages;
		
			$('.entry').val("");
			 $.each(results,function(obj,arr){
			
				title.push(arr.title);
				pageid.push(arr.pageid);
				console.log(obj,arr.pageid);
			
			 });
			 write();
			 $('.result').show('1000', function() {
			 	
			 });
			  		
			});
			  
		}

});


function write(){

if(results.length === 0){
$('#one').text(id.title);
$('#one').attr("href","http://en.wikipedia.org/?curid=" + id.pageid);
}
else{
$('#one').text(title[0]);
$('#one').attr("href", "http://en.wikipedia.org/?curid=" + pageid[0]);

$('#two').text(title[1]);
$('#two').attr("href", "http://en.wikipedia.org/?curid=" + pageid[1]);

$('#three').text(title[2]);
$('#three').attr("href", "http://en.wikipedia.org/?curid=" + pageid[2]);

$('#four').text(title[3]);
$('#four').attr("href","http://en.wikipedia.org/?curid=" + pageid[3]);

$('#five').text(title[4]);
$('#five').attr("href","http://en.wikipedia.org/?curid=" + pageid[4]);

$('#six').text(title[5]);
$('#six').attr("href","http://en.wikipedia.org/?curid=" + pageid[5]);

$('#seven').text(title[6]);
$('#seven').attr("href","http://en.wikipedia.org/?curid=" + pageid[6]);
  
$('#eight').text(title[7]);
$('#eight').attr("href","http://en.wikipedia.org/?curid=" + pageid[7]);

$('#nine').text(title[8]);
$('#nine').attr("href","http://en.wikipedia.org/?curid=" + pageid[8]);

$('#ten').text(title[9]);
$('#ten').attr("href","http://en.wikipedia.org/?curid=" + pageid[9]);


 }
};		



function broom(){

storage = {

}

pageid = []

title = []
	
$('.result div').removeClass("test");
$('#one').text("");
$('#one').attr("href", "");
 
$('#two').text("");
$('#two').attr("href", "");

$('#three').text("");
$('#three').attr("href", "");


$('#four').text("");
$('#four').attr("href","");


$('#five').text("");
$('#five').attr("href","");
$

$('#six').text("");
$('#six').attr("href","");


$('#seven').text("");
$('#seven').attr("href","");


$('#eight').text("");
$('#eight').attr("href","");


$('#nine').text("");
$('#nine').attr("href","");


$('#ten').text("");
$('#ten').attr("href","");

 
};
