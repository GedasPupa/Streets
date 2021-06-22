const fetch = require('node-fetch');

const fetchLocationName = async (lat, lng) => {
    let fetchData;
    await fetch(
      'https://www.mapquestapi.com/geocoding/v1/reverse?key=7vLWiYQX7jNe4d5roxDNBdcsfq2icXh1&location='+lat+'%2C'+lng+'&outFormat=json&thumbMaps=false',
    )
    .then((response) => response.json())
    .then((responseJson) => {
        fetchData = responseJson.results[0].locations[0].street.split(' ');
        fetchData.shift();
        console.log('STREET: ' + fetchData.join(' '));
    });
};

const point = {
    "type": "FeatureCollection",
    "features": [
        {   "type": "Feature", 
            "properties": { "MAPBLKLOT": "0001001", "BLKLOT": "0001001", "BLOCK_NUM": "0001", "LOT_NUM": "001", "FROM_ST": "0", "TO_ST": "0", "STREET": "UNKNOWN", "ST_TYPE": null, "ODD_EVEN": "E" }, 
            "geometry": { 
                "type": "Polygon", 
                "coordinates": [ [ 
                    [ -122.417346670944355, 37.808121127609709, 0.0 ], 
                    [ -122.417457443198046, 37.808685627252729, 0.0 ], 
                    [ -122.416003128921787, 37.808638547938997, 0.0 ], 
                    [ -122.41593547450509, 37.808293744156337, 0.0 ], 
                    [ -122.417346670944355, 37.808121127609709, 0.0 ] 
                ] ] 
            } 
        }
    ]
}

for (let i=0; i<point.features[0].geometry.coordinates[0].length; i++) {
    fetchLocationName(point.features[0].geometry.coordinates[0][i][1], point.features[0].geometry.coordinates[0][i][0]);
};
