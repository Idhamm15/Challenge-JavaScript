function segitiga(tinggi) {
  let output = '';
  for (i = -1; i<tinggi; i++) {
    for (j=0; j<tinggi; j++ ) {
      if (j>i) {
        output += (j+1)
      }else{
        output += ' '
      }
    }
    output += '\n'
  }
  return output
}
console.log(segitiga(5))