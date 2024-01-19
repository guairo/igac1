require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/geometry/Polygon",
    "esri/tasks/GeometryService",
    "esri/tasks/support/ProjectParameters",
    "dojo/domReady!"
], function (Map, MapView, Graphic, GraphicsLayer, Polygon, GeometryService, ProjectParameters) {
    
            var map = new Map({
                basemap: "topo-vector"
            });

            var geometryService = new GeometryService({
                url: "https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
            });


            // Crear una vista para el mapa
            var view = new MapView({
                container: "mapContainer",
                map: map,
                center: [-74, 4], 
                zoom: 5 
            });

       
            var graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer);

            // var zoom = new Zoom({
            //     view: view
            // });
        
           
            // view.ui.add(zoom, "bottom-left");

            function clearMap() {
                // Limpiar la capa del mapa
                graphicsLayer.removeAll();
            }

            // Mapeo de colores para TSuelo
            var colorMapping = {
                "1": [255, 0, 0, 0.5],   // Rojo
                "2": [0, 255, 0, 0.5],   // Verde
                "3": [0, 0, 255, 0.5]    // Azul
            };

            window.getServiceWebData = function () {
                var divipola = document.getElementById("divipolaInput").value;
                clearMap();

                
                fetch(`https://mapas.igac.gov.co/server/rest/services/carto/ProductosCartograficosVigentes/MapServer/0/query?where=DIVIPOLA=${divipola}&outFields=*&f=json`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                       
                        var features = data.features;

                        features.forEach(function (feature) {
                            var rings = feature.geometry.rings;
                            var tsuelo = feature.attributes.TSuelo;

                            var polygon = new Polygon({
                                rings: rings,
                                spatialReference: { wkid: 9377 }
                            });

                            var graphic = new Graphic({
                                geometry: polygon,
                                symbol: {
                                    type: "simple-fill",
                                    color: colorMapping[tsuelo] || [169, 169, 169, 0.5], 
                                    outline: {
                                        color: [255, 255, 255],
                                        width: 1
                                    }
                                },
                                attributes: feature.attributes
                            });

                            graphicsLayer.add(graphic);
                        });
                    });
            }
            window.getBackendData = function () {
                var divipola = document.getElementById("divipolaInput").value;
                clearMap();

             
                fetch(`http://localhost:5000/backend?divipola=${divipola}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log("Datos del backend:", data);

                       
                        var features = data.features;

                        features.forEach(function (feature, index) {
                            var rings = feature.geometry.rings;

                            // Crear polígonos a partir de los anillos
                            var polygons = rings.map(function (ring) {
                                return {
                                    type: "polygon",
                                    rings: ring,
                                    spatialReference: { wkid: 9377 } 
                                };
                            });

                            
                            polygons.forEach(function (polygon) {
                                var CSTipo = feature.attributes.CSTipo;

                                var graphic = new Graphic({
                                    geometry: polygon,
                                    symbol: {
                                        type: "simple-fill",
                                        color: colorMapping[CSTipo] || [169, 169, 169, 0.5],
                                        outline: {
                                            color: [255, 255, 255],
                                            width: 1
                                        }
                                    },
                                    attributes: feature.attributes
                                });

                                graphicsLayer.add(graphic);
                            });
                        });

             
                        var firstGeometry = graphicsLayer.graphics._items[0].geometry;
                        console.log(graphicsLayer.graphics._items[0].geometry);
                        
                        var viewSpatialReference = view.spatialReference;

                       
                        var params = new ProjectParameters({
                            geometries: [firstGeometry],
                            outSpatialReference: viewSpatialReference
                        });

                       
                        geometryService.project(params)
                            .then(function (projectedGeometries) {
                                
                                var geometryExtent = projectedGeometries[0].extent;

                             
                                view.extent = geometryExtent.clone().expand(10); 
                            })
                            .catch(function (error) {
                                console.error("Error al proyectar la geometría:", error);
                            });
                    })
                    .catch(function (error) {
                        console.error("Error en la solicitud al backend:", error);
                    });
            }



        });