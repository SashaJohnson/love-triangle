/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var count = 0;
  
  for(var i = 0; i < preferences.length; i++) {
      
      if (preferences.includes(preferences[i + 1])) {
          
          x = preferences.indexOf(i + 1);
          
          if (preferences.includes(x + 1)) {
              
              y = preferences.indexOf(x + 1);
              
              if (y + 1 ==  i + 1) {
                  
                  count = count + 1;
                  
              }
              
          }
          
      }
    
    
  
  
}

return count;

};