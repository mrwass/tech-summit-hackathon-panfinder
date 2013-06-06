	
	var map;
	var infowindows = new Array();
	
	$(function() { 
	
		$("#load_json").click(function() {
				
			addPageMarkers(json_places);
			$(this).attr("disabled","disabled");
		});
		
		$("#btn_search").click(function() {

			var params={towns: $('#towns option:selected').text()};
			$.ajax({
				type : "POST",
				url : "process/getLocationsJSON.jsp",
				timeout : 30000,
				async : true,
				dataType : "json",
				beforeSend : function(xhr) {
					xhr.setRequestHeader("Content-Length", params.length);
				},
				data:params,
				complete : function(xhr, data) {
					if (xhr.status == 200) {
						var val = xhr.responseText;
						val = $.trim(val);
						
						//Display results as desired
						//alert(val);
						map.removeMarkers();
						$('#results').empty();
						addPageMarkers(val);
					}
				}
			});
		});	
	
		//Maps Initialization
    	map = new GMaps({
		  div: '#map',
		  lat: 18.15,
		  lng: -66.3,
		  zoom: 9
		});
		
		//Maps api ------------------------------------	
		map.on('marker_added', function (marker) {
	        var index = map.markers.indexOf(marker);
	        $('#results').append('<li><a href="#" class="pan-to-marker" data-marker-index="' + index + '">' + marker.title + '</a></li>');
	
	        if (index == map.markers.length - 1) {
	          map.fitZoom();
	        }
	      });
	});
	
	$(document).on('click', '.pan-to-marker', function(e) {
	
	  for(var i=0; i < infowindows.length; i++){
	  	infowindows[i].close();
	  }
	  
      e.preventDefault();

      var position, lat, lng, $index, marker;
      
      $index = $(this).data('marker-index');

      position = map.markers[$index].getPosition();
      marker = map.markers[$index];

      lat = position.lat();
      lng = position.lng();

      map.setCenter(lat, lng);
	  marker['infoWindow'].open(map, marker);
	  
	  infowindows.push(marker['infoWindow']);

    });
	
	//-------------------------------------------	
	
	function addPageMarkers(places){

		var obj = jQuery.parseJSON(places);
		
		for(var i = 0; i < obj.Data.length; i++) {
			var marker = obj.Data[i];
			var latlong;
			latlong = marker.Lat.split(",");
			
			if(latlong.length == 2){
			
			map.addMarker({
			  id: marker.IdComercial,
			  lat: latlong[0],
			  lng: latlong[1],
			  title: marker.Name,
			  infoWindow: {
				  content: '<strong>'+ marker.Name + '</strong>' + '<br />' + marker.Physical1 + '<br />' + marker.Town + ', Puerto Rico',
				}
			});
			}
			
		}
	}
	
	
	//Dummy JSON replace
	var json_places = {
	places:[{
		id: '123',
        lat: '18.468538',
        lng: '-66.084938',
        name: 'Don Chelo Cash & Carry',
        city: 'San Juan',
        address:''},
        {
        id: '134',
         lat: '18.431411',
        lng: '-66.483994',
        name: 'Bodega mi abuela',
        city: 'Manati',
        address:''
        },
              {
              id: '1234',
         lat: '18.361043',
        lng: '-66.566391',
        name: 'Econo',
        city: 'Florida',
        address:''
        },
              {
              id: '12345',
         lat: '18.470491',
        lng: '-66.721573',
        name: 'Walmart',
        city: 'Arecibo',
        address:''
        }]
    };