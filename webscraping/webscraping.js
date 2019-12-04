const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

axios.get('https://presidenstory.com/stat_pht.php').then((response) => {
  const $ = cheerio.load(response.data);

  const urlElems = $('table.yng tbody tr td img');

  let presidentalArray = [];

  for (let i = 0; i < urlElems.length; i++) {
    if (!(urlElems[i].attribs.alt.includes("young"))) {
      let newPresident = {
        name: urlElems[i].attribs.alt,
        image: "http://www.presidenstory.com/" + urlElems[i].attribs.src,
        checked: false
      }

      presidentalArray.push(newPresident);
    }
  }

  fs.writeFile('allPresidents.json', JSON.stringify(presidentalArray, null, 2), (err) => {
    if (err) throw err;

    console.log("Saved");
  });
});