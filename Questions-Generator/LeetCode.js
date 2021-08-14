const puppeteer =  require('puppeteer');
const fs = require('fs');

(async()=>{

	let link = 'https://leetcode.com/problemset/all/';

	let browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0); 
	await page.goto(link, {waitUntill: 'networkidle2'});
	await page.waitFor(100000);

	let data = await page.evaluate(() => {

		var Diffref = document.getElementsByClassName("reactable-th-difficulty reactable-header-sortable ")
		Diffref[0].click()
		Diffref[0].click()

		let Indexes = [];
		let Titles = [];
		let Acceptances = [];
		let Difficulties = [];
		let Links = []
		var k = 0;
		var adj = 0;
		for(var i = 0; i<28; i++) {
			document.getElementsByClassName("reactable-page-button")[k].click();
			var trList = document.querySelector('tbody[class="reactable-data"]').getElementsByTagName('tr');
			for(var j = 0+adj; j<trList.length+adj; j++) {
    			var tdList = trList[j-adj].getElementsByTagName('td');
    			Indexes[j] = tdList[1].innerText;
    			Titles[j] = tdList[2].innerText;
    			Acceptances[j] = tdList[4].innerText;
    			Difficulties[j] = tdList[5].innerText;
    			let href = tdList[2].getElementsByTagName("div")[0].getElementsByTagName("a")[0];
				Links[j] = "https://leetcode.com" + href.getAttribute("href");
			}
			adj+=trList.length;
    		if(k<3) {
    			k++;
    		}
    		else if(i==26) {
	    		k++;
    		}
		}

		return {
			Indexes,
			Titles, 
			Acceptances, 
			Difficulties,
			Links
		};

	});

	fs.writeFileSync('./LeetCodeTest.json', JSON.stringify(data, null, '\t') ,'utf-8');
	await browser.close();
})();

