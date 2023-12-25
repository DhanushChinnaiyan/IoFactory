function maxProfit(timeUnit) {
    let maxEarnings = 0;
    let result = [];
  
    for (let theatres = 0; theatres <= Math.floor(timeUnit / 5); theatres++) {
      for (let pubs = 0; pubs <= Math.floor(timeUnit / 4); pubs++) {
        for (let parks = 0; parks <= Math.floor(timeUnit / 10); parks++) {
          const total_time = theatres * 5 + pubs * 4 + parks * 10;
  
          if (total_time <= timeUnit) {
            const earnings = theatres * 1500 + pubs * 1000 + parks * 3000;
            if (earnings > maxEarnings) {
              maxEarnings = earnings;
              result = [theatres, pubs, parks];
            }
          }
        }
      }
    }
  
    return result;
  }
  

  console.log(maxProfit(7));  
  console.log(maxProfit(8));   
  console.log(maxProfit(13));