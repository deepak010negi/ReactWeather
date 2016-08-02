function getTempCallBack (location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('Dallas', function(error, temp){
  if (err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});
