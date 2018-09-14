/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount(preferences = []) {

    let = 0;
    
    for (let i = 0; i < preferences.length; i++) {
        
        let a = preferences[i] - 1;
        if (a == i) {
            
            continue;
            
        }
        
          let b = preferences[a] - 1;
          if (a == b) {
            
            continue;
            
        }
        
            let c = preferences[b] - 1;
            if (c == b) {
            
            continue;
            
        }
        
              if (c == 1) {
                  
                  count++;
                  
              }
        
    }
    
    
    return count;
    

}