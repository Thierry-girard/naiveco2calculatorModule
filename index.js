/**
 * @typedef {Object} gpsPoint
 * @property {Number} latitude - latitude
 * @property {Number} longitude - longitude
 */


// https://www.ratp.fr/categorie-faq/5041
const marche = "marche";
const velo = "velo";
const metro = "metro";
const rer = "rer";
const tramway = "tramway";
const bus = "bus";
const voiture = "voiture";
const transilien = "transilien";

/**
 * Emission level in gram per kilometer
 */
const emissionLevel = {marche: 0, velo : 0, metro : 3.8, rer : 3.9, tramway : 3.1, bus : 95.4, voiture : 206, transilien : 6.4}


function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2-lat1);
  var dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return earthRadiusKm * c;
}

/**
 * Create a GPS point
 * 
 * @param {number} lat - latitude
 * @param {number} long - longitude
 * 
 * @returns {gpsPoint}
 */
module.exports.gpsPoint = function(lat, long){
    return {latitude : lat, longitude : long}
}


///////// Car CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a car for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionVoitureForDistance = function(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * 1.2 * emissionLevel[voiture];
};

/**
 * Compute the average CO2 emission for a car between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionVoitureFromGPSPoints = function(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return module.exports.emissionVoitureForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};


///////// Metro CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a metro ride for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionMetroForDistance = function(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * emissionLevel[metro];
};

/**
 * Compute the average CO2 emission for a metro ride between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionMetroFromGPSPoints = function(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return module.exports.emissionMetroForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};

///////// RER CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a rer ride for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionRERForDistance = function(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * emissionLevel[rer];
};

/**
 * Compute the average CO2 emission for a rer ride between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionRERFromGPSPoints = function(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return module.exports.emissionRERForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};


///////// Tramway CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a tramway ride for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionTramwayForDistance = function(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * emissionLevel[tramway];
};

/**
 * Compute the average CO2 emission for a tramway ride between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
module.exports.emissionTramwayFromGPSPoints = function(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return module.exports.emissionTramwayForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};

///////// Bus CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a bus ride for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionBusForDistance(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * emissionLevel[bus];
};
module.exports.emissionBusForDistance = emissionBusForDistance;

/**
 * Compute the average CO2 emission for a bus ride between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionBusFromGPSPoints(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return emissionBusForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};
module.exports.emissionBusFromGPSPoints = emissionBusFromGPSPoints;

///////// Transilien CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a transilien ride for a given distance
 * 
 * @param {number} dist - distance in kilometers
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionTransilienForDistance(dist) {
    if(!dist){
        console.log("Undefined distance") 
        return -1;
    }
    return dist * emissionLevel[transilien];
};
module.exports.emissionTransilienForDistance = emissionTransilienForDistance;

/**
 * Compute the average CO2 emission for a transilien ride between two gps point
 * 
 * @param {gpsPoint} start - starting point gps cordonate 
 * @param {gpsPoint} end - ending point gps coordonate
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionTransilienFromGPSPoints(start, end) {
    if(!(start && start.latitude && start.longitude)){
        console.log("Undefined start point") 
        return -1;
    }
    if(!(end && end.latitude && end.longitude)){
        console.log("Undefined end point") 
        return -1;
    }       
    return emissionTransilienForDistance(distanceInKmBetweenEarthCoordinates(start.latitude, start.longitude, end.latitude, end.longitude));
};
module.exports.emissionTransilienForDistance = emissionTransilienForDistance;


///////// Vélo CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a bike ride
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionVelo() {
    return emissionLevel[velo];
};
module.exports.emissionVelo = emissionVelo;

///////// Marche CO2 emission Computing /////////
/**
 * Compute the average CO2 emission for a walk
 * 
 * @returns {number} Co2 emission in gram
 */
function emissionMarche() {
    return emissionLevel[marche];
};
module.exports.emissionMarche = emissionMarche;