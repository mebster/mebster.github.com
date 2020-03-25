$(document).ready(function() {
	$.ajaxSetup({
		crossDomain: true
	});

  var insertVideos = function(playlistId, target) {
    $.getJSON('https://www.googleapis.com/youtube/v3/playlistItems?&origin=http://sixsq.com&maxResults=8&part=snippet&playlistId=' + playlistId + '&key=AIzaSyDdrmCZq0NAWnaGtxAbkL9P-9FyMRonpJY', function(data) {
      for(var i=0; i<data.items.length; i++) {
        var col = $("#col-template > div").clone();
        var id = data.items[i].snippet.resourceId.videoId;
        var title = data.items[i].snippet.title;
        col.html('<div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen class="embed-responsive-item" src="https://www.youtube.com/embed/' + id + '"></iframe></div>');
        col.appendTo("#" + target + " div:first");
      }
    });}
  insertVideos('PL1iYYk3gGLXa0rHUmiNGZNDdvP3DO289n', 'talks')
});
