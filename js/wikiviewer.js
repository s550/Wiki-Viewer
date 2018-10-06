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
// $('#rando').on("click",function(){

// 	$.getJSON("https:en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json",function(data){
// 		random = data;
// 		$('#link').text(random.query.random[0].title);
// 		$('#link').attr("href","http://en.wikipedia.org/?curid=" + random.query.random[0].id);
// 		// $('link').miniPreview({prefetch: 'pageload'});
// 	});


// });


$('.entry').on('keypress',function(event){
	if(event.which === 13){
		broom();
		// broom clears the written stuff so why is it that the old data is not being cleared from storage
		// because storage is an array since im getting data from there i need to clear storage before i store new data
		 value = input.val();
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="+ value + "&prop=revisions&rvlimit=10&rvprop=content&list=allpages&apfrom=" + value + "&aplimit=10&alprop=ids|title&format=json",function(data){
			storage = data;
			// Next thing I want to do is play with it untill I can get a list of links that are relevent to friday the 13th video game to make it like the page im basing this off of.
			// I solved this by combining a search for titles and all pages in the same api call. 
			pages = storage.query.pages;
			
			id = pages[Object.keys(pages)[0]];
			
			results = storage.query.allpages;
			
			// document.getElementsByClassName('entry').value = ""; 
			$('.entry').val("");
			 $.each(results,function(obj,arr){
			
				title.push(arr.title);
				pageid.push(arr.pageid);
				console.log(obj,arr.pageid);
			
			  // $('#result').append("<a>" + arr.title + "</a>");
			 // var test = $('#result a');
			 	// $('#result li a').each(function(z){
			 		// for(var i = 0; i <= test.length; i++){
			 		// for(var z=0;z<pageid.length;z++){
			 		// $(test[i]).attr("href", "http://en.wikipedia.org/?curid=" + pageid[z]);
			 	
			 	 // "https://en.wikipedia.org/w/api.php?action=query&titles=" + value + "&prop=info&prop=revisions&rvprop=content&list=categorymembers&cmtitle=Category:" + value +"&format=json"
			 	 
// what if i make individual ids for each a tag
			 });
			 write();
			 $('.result').show('1000', function() {
			 	
			 });
			  		
			  			
			  	
			  	

			  
			  // $('#result a').attr("href", "http://en.wikipedia.org/?curid=" + pageid);
			 // .attr("href", "http://en.wikipedia.org/?curid=" + arr.pageid);
			 
			 // $('#result a').append("" + value.pageid);
			});
			  
			 // .html seems to only be able to create one element at a time.
			//  might need to do key value and then write the key you are looking for 
			// $('#link').attr("href", "http://en.wikipedia.org/?curid=" + id.pageid).html("<a>http://en.wikipedia.org/?curid=" + id.pageid + "</a>");
// okay search is working next step is to figure out how to turn it into a url and either open an apporpriate page or give links to the results they are looking for
// maybe top four results and display them with html tags if possible do a visual thumbnail. 
// need to erase the text once you hit enter and store the data on the text box.
// for future refrence adding a form tag is what created problems for the jquery.
 //To access page Id i had to assign the pages object in storage to a variable then dig into that by using object.keys(var)[0] to select the first object in that object
  // from there i could use dot notation to access the page id.  
		}
	

});
// http://en.wikipedia.org/?curid=  enter the id number and it will take you to that specific page after 
// need to find a way to capture the page id for searching  storage.query.pages is the answer 
// api.php?action=query&titles=Winnipeg,_Manitoba&prop=revisions&rvlimit=max&rvprop=content&list=backlinks&bltitle=Winnipeg,_Manitoba&bllimit=max
// My current problem is i Need a way to reset the entire page when a new query is searched in the searchbox. it looks like
// The actual storage is resetting but the links and text are not
// To fix this i had to reset my storage object and my title and pageid arrays to blank so they could be re-written because i was just re iterating
// over the first 10 entries while adding more and more every time I entered a new query. 




function write(){

if(results.length === 0){
$('#one').text(id.title);
$('#one').attr("href","http://en.wikipedia.org/?curid=" + id.pageid);
}
else{
// $('#result div').addClass("test");
$('#one').text(title[0]);
$('#one').attr("href", "http://en.wikipedia.org/?curid=" + pageid[0]);
 // $('#uno').attr("src", "http://en.wikipedia.org/?curid=" + pageid[0]);
// $('#one').miniPreview({prefetch: 'pageload'});
$('#two').text(title[1]);
$('#two').attr("href", "http://en.wikipedia.org/?curid=" + pageid[1]);
// $('#two').miniPreview({prefetch: 'pageload'});
// $('#dos').attr("src", "http://en.wikipedia.org/?curid=" + pageid[1]);
$('#three').text(title[2]);
$('#three').attr("href", "http://en.wikipedia.org/?curid=" + pageid[2]);
// $('#three').miniPreview({prefetch: 'pageload'});
// $('#tres').attr("src", "http://en.wikipedia.org/?curid=" + pageid[2]);
$('#four').text(title[3]);
$('#four').attr("href","http://en.wikipedia.org/?curid=" + pageid[3]);
// $('#four').miniPreview({prefetch: 'pageload'});
// $('#quatro').attr("src", "http://en.wikipedia.org/?curid=" + pageid[4]);
$('#five').text(title[4]);
$('#five').attr("href","http://en.wikipedia.org/?curid=" + pageid[4]);
// $('#five').miniPreview({prefetch: 'pageload'});
// $('#cinco').attr("src", "http://en.wikipedia.org/?curid=" + pageid[4]);
$('#six').text(title[5]);
$('#six').attr("href","http://en.wikipedia.org/?curid=" + pageid[5]);
// $('#six').miniPreview({prefetch: 'pageload'});
// $('#sies').attr("src", "http://en.wikipedia.org/?curid=" + pageid[5]);
$('#seven').text(title[6]);
$('#seven').attr("href","http://en.wikipedia.org/?curid=" + pageid[6]);
// $('#seven').miniPreview({prefetch: 'pageload'});
// $('#siete').attr("src", "http://en.wikipedia.org/?curid=" + pageid[6]);
$('#eight').text(title[7]);
$('#eight').attr("href","http://en.wikipedia.org/?curid=" + pageid[7]);
// $('#eight').miniPreview({prefetch: 'pageload'});
// $('#ocho').attr("src", "http://en.wikipedia.org/?curid=" + pageid[7]);
$('#nine').text(title[8]);
$('#nine').attr("href","http://en.wikipedia.org/?curid=" + pageid[8]);
// $('#nine').miniPreview({prefetch: 'pageload'});
// $('#nueve').attr("src", "http://en.wikipedia.org/?curid=" + pageid[8]);
$('#ten').text(title[9]);
$('#ten').attr("href","http://en.wikipedia.org/?curid=" + pageid[9]);
// $('#ten').miniPreview({prefetch: 'pageload'});
// $('#deis').attr("src", "http://en.wikipedia.org/?curid=" + pageid[9]);

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
