var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_campus_img_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "campus_img_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/campus_img_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8550545.717804, 3280031.343627, 8551271.660819, 3280415.444822]
                            })
                        });
var format_demo_2 = new ol.format.GeoJSON();
var features_demo_2 = format_demo_2.readFeatures(json_demo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_demo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_demo_2.addFeatures(features_demo_2);
var lyr_demo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_demo_2, 
                style: style_demo_2,
                interactive: true,
                title: '<img src="styles/legend/demo_2.png" /> demo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_campus_img_modified_1.setVisible(true);lyr_demo_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_campus_img_modified_1,lyr_demo_2];
lyr_demo_2.set('fieldAliases', {'id': 'id', 'Buildings': 'Buildings', });
lyr_demo_2.set('fieldImages', {'id': '', 'Buildings': '', });
lyr_demo_2.set('fieldLabels', {'id': 'no label', 'Buildings': 'no label', });
lyr_demo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});