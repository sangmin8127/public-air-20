const axios = require('axios');
const serviceKey = require( '../urlsKeys/key' )
const aqiUrl = require('../urlsKeys/url')

const axdata = async (stationName, callback) => {
  
  const url = aqiUrl.airUrl
  let ServiceKey = decodeURIComponent(serviceKey.publicPortalkey)
  // axios로 한국환경공단_에어코리아_대기오염정보 api에 연결하여 데이터를 불러옴.
  try {
    const response = await axios.get(url, 
      { params: 
        {
          dataTerm: 'DAILY',
          stationName: stationName,
          pageNo: '1',
          numOfRows: '1',
          ver:'1.3',
          returnType: 'json',
          ServiceKey: ServiceKey}
      }
    )
    // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
    // console.log(response.data)
    const {dataTime,pm10Value,pm25Value,no2Value} = response.data.response.body.items[0]
    // response.data.response.body 를  콘솔로 확인
    console.log("response.data.response.body from axdata", response.data.response.body)
    const airdata = {
      location: stationName,
      time: dataTime,
      pm10: pm10Value,
      pm25: pm25Value,
      no2: no2Value
    }

    callback(undefined, {airquality:airdata})
  } catch (error) {
    console.log('error broke out:  ', error) 
  }  
//   let queryParams =   encodeURIComponent('stationName') + '=' + encodeURIComponent(stationName);
//   queryParams += '&' + encodeURIComponent('dataTerm') + '=' + encodeURIComponent('DAILY');
//   queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
//   queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1');
//   queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.3');
//   queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json')
//   queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + ServiceKey

//   const fullurl = url + queryParams;

//   try {
//     const response = await axios.get(fullurl)
//     // console.log(response.data.response.body.items[0].pm10Value)
//     const data = response.data.response.body.items[0]
//     const airdata = {
//       location: stationName,
//       time: data.dataTime,
//       pm10: data.pm10Value,
//       pm25: data.pm25Value,
//       no2: data.no2Value
//     }
//     callback(undefined, {airquality:airdata})
//   } catch (error) {
//     console.log('error broke out:  ', error) 
//   }  
}

module.exports = axdata;
