var apiKey='AIzaSyD181_csxai1WVHPAfAsc1V_-Bqaoy-5Bk';
var channelId='UCHkkcRUEZsxXYV-zdbIBc3w'; //channel id

$(document).ready(function(){

	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part:'contentDetails',
			id:channelId,
			key:apiKey },
			function(data) {
				$.each(data.items, function(i,item){
					pid=item.contentDetails.relatedPlaylists.uploads;
					fetchVideo(pid);
				});
			}
	);
	function fetchVideo(pid) {
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part:'snippet',
				maxResults:50,
				playlistId:"PLn2SzWO9Ofzzm9til1mYZfwsPDCYpqwgj",
				key:'AIzaSyD181_csxai1WVHPAfAsc1V_-Bqaoy-5Bk' },
				function(data) {
/*var mylink= '';	 
				  var arr = ['https://drive.google.com/file/d/13hjdOed-v5ph91EkU7JjkUTu-gPmvqgx/view?usp=sharing','https://drive.google.com/file/d/1HaY_k8i8gz38lx2EJJz9QGMlBjKSaPeC/view?usp=sharing','https://drive.google.com/file/d/1CLItoHSyap6yBzMzOvAv1AwYoGpjjwml/view?usp=sharing','https://drive.google.com/file/d/1YvzkPXiihiU20drQaYHdL-3gnC8NdujE/view?usp=sharing','https://drive.google.com/file/d/1SRCZ0BaqK7Tvhimb8CwoUJG3_z5hRuQZ/view?usp=sharing','https://drive.google.com/file/d/1ICgJuycwKdAsWeYd4Fwtf5ULeOsAOz-w/view?usp=sharing','https://drive.google.com/file/d/1ICgJuycwKdAsWeYd4Fwtf5ULeOsAOz-w/view?usp=sharing','https://drive.google.com/file/d/1ICgJuycwKdAsWeYd4Fwtf5ULeOsAOz-w/view?usp=sharing','https://drive.google.com/file/d/1M0rh4rnwb8sQyoj1IuXgSI3UBrAiy4YJ/view?usp=sharing','https://drive.google.com/file/d/1M0rh4rnwb8sQyoj1IuXgSI3UBrAiy4YJ/view?usp=sharing'];

$.each(arr.reverse(), function(index, value){
mylink= value;
});*/
					$.each(data.items.reverse(), function(i,item){
						var vid_title=item.snippet.title;
						var vid_thumb=item.snippet.thumbnails.medium.url;
						var vid_id=item.snippet.resourceId.videoId;
						var channelTitle=item.snippet.channelTitle;
						var vid_container=$('#videos');
						var videoEle='<div class="video vidEle" data-id="'+vid_id+'">'+
								        '<a href="#top">'+
								          '<img class="v-img" src="'+vid_thumb+'"/>'+
								          '<i class="play-btn fa fa-play"></i>'+
								          '<div class="v-title">'+vid_title+'</div>'+
								        //'</a>'+
								      '</div>'
						vid_container.append(videoEle);


						var videode='<tr><td><div class="video vidEle2" style="width:42%;height:40px;" data-id="'+vid_id+'" ><a href="#top"><img class="v-img" style="padding:0;width:100%;height:48px; margin:0 auto" src="'+vid_thumb+'"/><i class="play-btn2 fa fa-play" style"top:72% !important"></i></a></div></td><td><div class="vidEle" data-id="'+vid_id+'" ><a href="#top"><div class="v-title">'+vid_title+'</div></a></div></td><td><p>'+channelTitle+'</p></td></tr>'
						 $('#employee_table').append(videode);



					});
				}
		);
	}

 	$(document).on('click','.vidEle',function(){
 		$('#player_vid').attr('src','https://www.youtube.com/embed/'+$(this).data('id')+'?autoplay=1');
 		$('')
 	});
	
	$(document).on('click','.vidEle2',function(){
 		$('#player_vid').attr('src','https://www.youtube.com/embed/'+$(this).data('id')+'?autoplay=1');
 		$('')
 	});

});
