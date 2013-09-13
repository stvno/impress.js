var geojson_format = new OpenLayers.Format.GeoJSON({
    'internalProjection': new OpenLayers.Projection("EPSG:900913"),
    'externalProjection': new OpenLayers.Projection("EPSG:4326")
   });
(function ( document, window ) {
    'use strict';
    
    
     document.addEventListener("impress:stepenter", function (event) {
      if(event.target.id=="me") {
         $('#me-me').delay(5000).fadeOut(1000)
          window.setTimeout(function() {
          $('#me-me').text('@stvno').fadeIn(1000)
          },6000);
          
      }
      else if(event.target.id=="websocket") { 
       $('#map').data('cowOlMapWidget').map.updateSize();
      }
      else  if(event.target.id=="playtime") { 
        $('#map').animate({width:'980px',height:'500px'});
        $('#map').data('cowOlMapWidget').map.updateSize();
        $('#heartbeat').show();
        $('#nodemap').animate({right:'-38px',bottom:'-325px'});
        }
            }, false);
            
            
       document.addEventListener("impress:stepleave", function (event) {
      if(event.target.id=="me") {
          $('#me-me').fadeOut().html('me').fadeIn()
      }
      else if(event.target.id=="playtime") { 
  
               $('#map').animate({width:'500px',height:'700px'});
       
        $('#heartbeat').hide();
        $('#nodemap').animate({right:'442px',bottom:'-560px'});
         $('#map').data('cowOlMapWidget').map.updateSize();
      }
      else if(event.target.id=="techniek2") { 
       
        $('#map').animate({width:'980px',height:'500px'});
        $('#map').data('cowOlMapWidget').map.updateSize();
        $('#heartbeat').show();
        $('#nodemap').animate({right:'-38px',bottom:'-325px'});

      }
            }, false);
    })(document, window);
    
    $(document).on('ready',function(){
    //for some reason the map doesn't fill nicely at the start
   // map.invalidateSize();
     $('#cow').cow({
    activeHerd: 0,
    websocket: {url: 'wss://websocket.geodan.nl:443/'},
    featurestore: {},
    localdbase: {},
    geolocator: {}
  });
  
  core =$('#cow').data('cow');
  
   $('#map').OlMapWidget({core: '#cow'});
    $('#connect').MonitorWidget({core: '#cow'});
   });
