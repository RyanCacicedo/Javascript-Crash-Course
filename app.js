for (let i = 1; i <= 20; i++) {
    if (i%3===0 && i%5===0) {
     console.log(`${i} -> Frontend simplified`)
    }
  else if (i%3===0) {
    console.log(`${i} -> frontend`)
   }
  else if (i%5===0) {
    console.log(`${i} -> simplified`)
   }
 else {
    console.log(`${i} -> ${i}`)
   }
   
}

