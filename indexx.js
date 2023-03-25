

const apiUrl = 'https://api.blockchainfue.com';
const apiKey = '05e2101c33de5a93827fc975bf39859939d40228333251ab2c48be70ccecd5ce';

const headers = {
  'X-App-Id': '641844fef8de51cb3d376f73',
  'X-App-Key': apiKey,
  'Content-Type': 'application/json'
};

const assetData = {
    type: 'my_third_test',
    name: 'Any name',
    description: 'Just a test asset'
  };

function createAsset(assetData, callback) {
  const options = {
    url: `${apiUrl}/api/asset`,
    headers: headers,
    json: true,
    body: {
      asset: {
        data: assetData
      }
    }
  };

  request.post(options, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      callback(new Error(`Failed to create asset: ${response.statusCode}`));
    } else {
      callback(null, body);
    }
  });
}

function leerAsset(id) {
    const query = {
      id: id
    };
  
    const apiUrl = 'https://api.blockchainfue.com';
    const apiKey = '05e2101c33de5a93827fc975bf39859939d40228333251ab2c48be70ccecd5ce';
    const headers = {
      'X-App-Id': '641844fef8de51cb3d376f73',
      'X-App-Key': apiKey,
      'Content-Type': 'application/json'
    };

    const options = {
      url: `${apiUrl}/api/asset?query=${encodeURIComponent(JSON.stringify(query))}`,
      headers: headers
    };
  
    request.get(options, (error, response, body) => {
      if (error) {
        console.error(error);
        callback(error);
      } else {
        const data = JSON.parse(body);
        callback(null,data);
      }
    });
}


  
  // createAsset(assetData, (error, result) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log(result);
  //   }
  // });
  
  
  
function cositas(){
  // leerAsset(id)
  // document.
        
  alert(leerAsset('c3852573ca61d1323cf7f8e3bf4a3f52bd75e2b7496150732ed74c344475dd2e'));
}
