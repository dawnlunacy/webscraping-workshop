var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var fs = require('fs');

nightmare
.goto('https://www.ismercuryinretrograde.com/')
.wait(3000)
.evaluate(function() {
  var isMercuryInRetrograde = document.querySelectorAll('span')
  var whenMercuryChanges = document.querySelector('strong')
  return [isMercuryInRetrograde[0].innerText, isMercuryInRetrograde[1].innerText, whenMercuryChanges.innerText]
})
.end()
.then(function(result){
  fs.writeFileSync('testOutput.json', JSON.stringify(result));
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2])

})
.catch(function (error) {
  console.error('Search failed:', error);
});