const axios = require('axios');
const serviceKey = require( '../urlsKeys/key' )
const aqiUrl = require('../urlsKeys/url')

const axdata = async (stationName, callback) => {
  const url = aqiUrl.airUrl
  var ServiceKey = serviceKey.publicPortalkey

  var queryParams = encodeURIComponent('ServiceKey') + '=' + ServiceKey
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('dataTerm') + '=' + encodeURIComponent('DAILY');
  queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.3');
  queryParams += '&' + encodeURIComponent('stationName') + '=' + encodeURIComponent(stationName);
  queryParams += '&' + encodeURIComponent('_returnType') + '=' + encodeURIComponent('json')
  const fullurl = url + queryParams;

  try {
    const json = await axios.get(fullurl)
    // console.log( 'json ', json.data )
    const airData = json.data
    const airDB = {
      location: airData['parm']['stationName'],
      time: airData['list'][0]['dataTime'],
      pm10: airData['list'][0]['pm10Value'],
      pm25: airData['list'][0]['pm25Value'],
      no2: airData['list'][0]['no2Value']
    }
    callback(undefined, {airquality:airDB})
  } catch (error) {
    console.log('error broke out:  ', error) 
  }  
}

module.exports = axdata;
