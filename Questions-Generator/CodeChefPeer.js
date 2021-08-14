const puppeteer =  require('puppeteer');
const fs = require('fs');

(async()=>{

	let link = 'https://www.codechef.com/problems/extcontest?sort_by=Accuracy&sorting_order=desc';

	let browser = await puppeteer.launch();
	let page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0); 
	await page.goto(link, {waitUntill: 'networkidle2'});
	await page.waitFor(100000);

	let data = await page.evaluate(() => {

		let Names = [];
		let Codes = [];
		let Submissions = [];
		let Accuracies = [];
		
		let tr = document.getElementsByClassName("problemrow");
		for(var i = 0; i<tr.length; ++i) {
			let td = tr[i].getElementsByTagName("td");
			Names[i] = td[0].innerText;
			Codes[i] = td[1].innerText;
			Submissions[i] = td[2].innerText;
			Accuracies[i] = td[3].innerText;
		}

		return {
			Names,
			Codes, 
			Submissions, 
			Accuracies
		};

	});

	fs.writeFileSync('./CodeChefPeer.json', JSON.stringify(data, null, '\t') ,'utf-8');
	await browser.close();
})();