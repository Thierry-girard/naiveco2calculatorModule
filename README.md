# naiveco2calculatorModule
A simple Co2 emission calculator for the Eco Transport Campus project as a nodeJS module.
*****
### Usage : 
* Include the module in your project.<br>
```javascript 
co2calculator = require("/path/to/module/CO2Module");
```
<br>

* Create a GPS point.<br>
```javascript
a = co2calculator.gpsPoint(48.011580, 2.380751);
b = co2calculator.gpsPoint(51.435629, -0.022220);
```
<br>

* Compute the average CO2 emission for a given transportation between two gps point.
```javascript
 co2 = calculator.emissionFromGPSPoints(a, b, co2calculator.voiture);
```
<br>

* Compute the average CO2 emission for a given distance (in kilometer) and a given transportation.
```javascript
co2 = co2calculator.emissionForDistance(661, co2calculator.bus)
```
<br>
 
* Available transportation :
```javascript
co2calculator.marche
co2calculator.velo
co2calculator.rer
co2calculator.tramway  
co2calculator.bus
co2calculator.voiture
co2calculator.transilien
 ```
