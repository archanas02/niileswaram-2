var wms_layers = [];

var format_neeleshwaram_0 = new ol.format.GeoJSON();
var features_neeleshwaram_0 = format_neeleshwaram_0.readFeatures(json_neeleshwaram_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neeleshwaram_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neeleshwaram_0.addFeatures(features_neeleshwaram_0);
var lyr_neeleshwaram_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_neeleshwaram_0, 
                style: style_neeleshwaram_0,
                popuplayertitle: "neeleshwaram",
                interactive: true,
                title: '<img src="styles/legend/neeleshwaram_0.png" /> neeleshwaram'
            });
var format_stream_1 = new ol.format.GeoJSON();
var features_stream_1 = format_stream_1.readFeatures(json_stream_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stream_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_1.addFeatures(features_stream_1);
var lyr_stream_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stream_1, 
                style: style_stream_1,
                popuplayertitle: "stream",
                interactive: true,
    title: 'stream<br />\
    <img src="styles/legend/stream_1_0.png" /> 0<br />\
    <img src="styles/legend/stream_1_1.png" /> 1<br />\
    <img src="styles/legend/stream_1_2.png" /> 2<br />\
    <img src="styles/legend/stream_1_3.png" /> 3<br />\
    <img src="styles/legend/stream_1_4.png" /> 4<br />\
    <img src="styles/legend/stream_1_5.png" /> 5<br />\
    <img src="styles/legend/stream_1_6.png" /> 6<br />'
        });
var format_Main_2 = new ol.format.GeoJSON();
var features_Main_2 = format_Main_2.readFeatures(json_Main_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Main_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Main_2.addFeatures(features_Main_2);
var lyr_Main_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Main_2, 
                style: style_Main_2,
                popuplayertitle: "Main",
                interactive: true,
                title: '<img src="styles/legend/Main_2.png" /> Main'
            });

lyr_neeleshwaram_0.setVisible(true);lyr_stream_1.setVisible(true);lyr_Main_2.setVisible(true);
var layersList = [lyr_neeleshwaram_0,lyr_stream_1,lyr_Main_2];
lyr_neeleshwaram_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_stream_1.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_Main_2.set('fieldAliases', {'id': 'id', });
lyr_neeleshwaram_0.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_stream_1.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_Main_2.set('fieldImages', {'id': 'TextEdit', });
lyr_neeleshwaram_0.set('fieldLabels', {'PERIMETER': 'inline label - visible with data', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'inline label - always visible', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_stream_1.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_Main_2.set('fieldLabels', {'id': 'no label', });
lyr_Main_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});