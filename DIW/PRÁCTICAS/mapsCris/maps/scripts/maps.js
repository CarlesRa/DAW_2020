
function initMap() {

    // Variable infoWindow
    var infoWindow;

    // Coordenades Marcadors
    const benidorm = { lat: 38.5425755515812, lng: -0.12192752295212043}
    const pereMaria = { lat: 38.55418896698736, lng: -0.12155771255493165 };
    const ajuntament = { lat: 38.539653676185644, lng: -0.12830748818966142 };
    const teatre = { lat: 38.54250448478783, lng: -0.13028720168140645 };
    const piscina = { lat: 38.54342927447565, lng: -0.10748668811392786 };
    const comercial = { lat: 38.54646653417975, lng:  -0.09409695547741058 };

    // Mapes
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 12,
        center: benidorm,
        mapTypeId: 'terrain'
      },
    );
    const map2 = new google.maps.Map(
        document.getElementById("map2"),
        {
          zoom: 12,
          center: benidorm,
          mapTypeId: 'satellite'
        },
    );
    const map3 = new google.maps.Map(
        document.getElementById("map3"),
        {
          zoom: 12,
          center: benidorm,
          mapTypeId: 'roadmap'
        }
    );
    
    // Afegir marcadors
    var marker_pereMaria = new google.maps.Marker({
        position: pereMaria,
        map: map,
        title: 'pereMaria',
        animation: google.maps.Animation.DROP,

    });
    var marker_ajuntament = new google.maps.Marker({
        position: ajuntament,
        map: map,
        title: 'ajuntament',
        animation: google.maps.Animation.DROP,

    });
    var marker_teatre = new google.maps.Marker({
        position: teatre,
        map: map,
        title: 'teatre',
        animation: google.maps.Animation.DROP,

    });
    var marker_piscina = new google.maps.Marker({
        position: piscina,
        map: map,
        title: 'piscina',
        animation: google.maps.Animation.DROP,

    });
    var marker_comercial = new google.maps.Marker({
        position: comercial,
        map: map,
        title: 'comercial',
        animation: google.maps.Animation.DROP,

    });
    
    // listeners 
    marker_pereMaria.addListener('click', function() {
        stopMarkers();
        infoWindow = new google.maps.InfoWindow({
            content: contenidos.peremaria,
        });
        infoWindow.open(map, marker_pereMaria);
        toogleBounce(marker_pereMaria);
    });
    marker_ajuntament.addListener('click', function() {
        stopMarkers();
        infoWindow = new google.maps.InfoWindow({
            content: contenidos.ajuntament,
        });
        infoWindow.open(map, marker_ajuntament);
        toogleBounce(marker_ajuntament);
    });
    marker_teatre.addListener('click', function() {
        stopMarkers();
        infoWindow = new google.maps.InfoWindow({
            content: contenidos.teatre,
        });
        infoWindow.open(map, marker_teatre);
        toogleBounce(marker_teatre);
    });
    marker_piscina.addListener('click', function() {
        stopMarkers();
        infoWindow = new google.maps.InfoWindow({
            content: contenidos.piscina,
        });
        infoWindow.open(map, marker_piscina);
        toogleBounce(marker_piscina);
    });
    marker_comercial.addListener('click', function() {
        stopMarkers();
        infoWindow = new google.maps.InfoWindow({
            content: contenidos.comercial,
        });
        infoWindow.open(map, marker_comercial);
        toogleBounce(marker_comercial);
    });

    /**
     * Función para parar todas las animaciones
     */
    function stopMarkers() {
        stopMarker(marker_pereMaria);
        stopMarker(marker_ajuntament);
        stopMarker(marker_teatre);
        stopMarker(marker_piscina);
        stopMarker(marker_comercial);
    }

    /**
     * Detiene la animación de un marcador
     * @param {el marcador a detener} marker 
     */
    function stopMarker(marker) {
        marker.setAnimation(null);
    }
 
    /**
     *  Función para controlar animaciones
     */
    function toogleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    
    // Contenido info windows
    var contenidos = 
        {
            peremaria: '<div class="content">' +
                       '<h3> Ies Pere Maria</h3>' +
                       '<img src="./img/ies.jpeg" alt="img peremaria">' +
                       '<p>Aprende pagando por la api de google maps xD</p>' +
                       '</div>',
            ajuntament: '<div class="content">' +
                        '<h3> Ayuntamiento de Benidorm</h3>' +
                        '<img src="./img/aju.jpg" alt="img ajuntament">' +
                        '<p>Zona emblemática de Benidorm</p>' +
                        '</div>',
            teatre: '<div class="content">' +
                        '<h3> Auditorio Julio Iglesias</h3>' +
                        '<img src="./img/aud.jpg" alt="img teatre">' +
                        '<p>En honor al gran Julio Iglesias weaH</p>' +
                        '</div>',
            piscina: '<div class="content">' +
                        '<h3> Piscina Cubierta</h3>' +
                        '<img src="./img/pis.jpg" alt="img peremaria">' +
                        '<p>Nada todo el año en la piscina cubierta</p>' +
                        '</div>',
            comercial: '<div class="content">' +
                        '<h3> Centro comercial Aqua</h3>' +
                        '<img src="./img/aqu.jpg" alt="img peremaria">' +
                        '<p>Te recomendamos el CC La Maria, es más barato!!</p>' +
                        '</div>',
        }

    // dibuixe el poligon

    var triangleCoords = [
        new google.maps.LatLng(38.53792112245554, -0.1348895746766272),
        new google.maps.LatLng(38.53712177504032, -0.12953588547869785),
        new google.maps.LatLng(38.538256803761094, -0.11780926765637965),
        new google.maps.LatLng(38.534228524706556, -0.13171383920050078),
    ];

    var poligon = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#3143e8',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#3199e8',
        fillOpacity: 0.35
    });

    poligon.setMap(map);

    // Dibuixe el cercle
    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: ajuntament,
        radius: 200,
      });
  
  }