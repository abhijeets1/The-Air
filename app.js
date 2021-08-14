const express = require('express');
const http = require('http');
const fs = require('fs');
const QGenerator = require('./Questions-Generator/QGenerator.js');
var cron = require('cron').CronJob;

var status = 'start :- ';
var job = new cron('0 0 1 * * *', function(){
    status +='done';
    let obj = QGenerator();
    fs.writeFileSync('./TQuestions.json', JSON.stringify(obj) ,'utf-8');
});
job.start();

let app = express();
let server = http.createServer(app);

// Data reading from LeetCode file.
let data = fs.readFileSync('./Questions-Generator/LeetCode.json','utf8');
let Indexes = (JSON.parse(data.toString()).Indexes).slice();
let Titles = (JSON.parse(data.toString()).Titles).slice();
let Acceptances = (JSON.parse(data.toString()).Acceptances).slice();
let Difficulties = (JSON.parse(data.toString()).Difficulties).slice();
let Links = (JSON.parse(data.toString()).Links).slice();

// Data reading from CodeChefSchool file.
data = fs.readFileSync('./Questions-Generator/CodeChefSchool.json','utf8');
let SNames = (JSON.parse(data.toString()).Names).slice();
let SCodes = (JSON.parse(data.toString()).Codes).slice();
let SSubmissions = (JSON.parse(data.toString()).Submissions).slice();
let SAccuracies = (JSON.parse(data.toString()).Accuracies).slice();

// Data reading from CodeChefEasy file.
data = fs.readFileSync('./Questions-Generator/CodeChefEasy.json','utf8');
let ENames = (JSON.parse(data.toString()).Names).slice();
let ECodes = (JSON.parse(data.toString()).Codes).slice();
let ESubmissions = (JSON.parse(data.toString()).Submissions).slice();
let EAccuracies = (JSON.parse(data.toString()).Accuracies).slice();

// Data reading from CodeChefMedium file.
data = fs.readFileSync('./Questions-Generator/CodeChefMedium.json','utf8');
let MNames = (JSON.parse(data.toString()).Names).slice();
let MCodes = (JSON.parse(data.toString()).Codes).slice();
let MSubmissions = (JSON.parse(data.toString()).Submissions).slice();
let MAccuracies = (JSON.parse(data.toString()).Accuracies).slice();

// Data reading from CodeChefHard file.
data = fs.readFileSync('./Questions-Generator/CodeChefHard.json','utf8');
let HNames = (JSON.parse(data.toString()).Names).slice();
let HCodes = (JSON.parse(data.toString()).Codes).slice();
let HSubmissions = (JSON.parse(data.toString()).Submissions).slice();
let HAccuracies = (JSON.parse(data.toString()).Accuracies).slice();

// Data reading from CodeChefChallange file.
data = fs.readFileSync('./Questions-Generator/CodeChefChallenge.json','utf8');
let CNames = (JSON.parse(data.toString()).Names).slice();
let CCodes = (JSON.parse(data.toString()).Codes).slice();
let CSubmissions = (JSON.parse(data.toString()).Submissions).slice();
let CAccuracies = (JSON.parse(data.toString()).Accuracies).slice();

// Initializing todays questions.
let Todays_ques = (JSON.parse(fs.readFileSync('./Questions-Generator/TQuestions.json', 'utf8'))).all;
app.set('view engine', 'ejs');
app.get('', (req, res) => {
    res.render('main-page', {

        // Leet Code Easy Questions.
    	q0 : {
        	i : Indexes[Todays_ques[0]],
        	t : Titles[Todays_ques[0]],
        	a : Acceptances[Todays_ques[0]],
        	d : Difficulties[Todays_ques[0]],
            l : Links[Todays_ques[0]],
        },

        q1 : {
        	i : Indexes[Todays_ques[1]],
        	t : Titles[Todays_ques[1]],
        	a : Acceptances[Todays_ques[1]],
        	d : Difficulties[Todays_ques[1]],
            l : Links[Todays_ques[1]],
        },

        q2 : {
        	i : Indexes[Todays_ques[2]],
        	t : Titles[Todays_ques[2]],
        	a : Acceptances[Todays_ques[2]],
        	d : Difficulties[Todays_ques[2]],
            l : Links[Todays_ques[2]],
        },

        q3 : {
        	i : Indexes[Todays_ques[3]],
        	t : Titles[Todays_ques[3]],
        	a : Acceptances[Todays_ques[3]],
        	d : Difficulties[Todays_ques[3]],
            l : Links[Todays_ques[3]],
        },

        // Leet Code Medium Questions.
        q4 : {
        	i : Indexes[Todays_ques[4]],
        	t : Titles[Todays_ques[4]],
        	a : Acceptances[Todays_ques[4]],
        	d : Difficulties[Todays_ques[4]],
            l : Links[Todays_ques[4]],
        },

        q5 : {
        	i : Indexes[Todays_ques[5]],
        	t : Titles[Todays_ques[5]],
        	a : Acceptances[Todays_ques[5]],
        	d : Difficulties[Todays_ques[5]],
            l : Links[Todays_ques[5]],
        },

        q6 : {
        	i : Indexes[Todays_ques[6]],
        	t : Titles[Todays_ques[6]],
        	a : Acceptances[Todays_ques[6]],
        	d : Difficulties[Todays_ques[6]],
            l : Links[Todays_ques[6]],
        },

        q7 : {
        	i : Indexes[Todays_ques[7]],
        	t : Titles[Todays_ques[7]],
        	a : Acceptances[Todays_ques[7]],
        	d : Difficulties[Todays_ques[7]],
            l : Links[Todays_ques[7]],
        },

        // Leet Code Hard Questions.
        q8 : {
        	i : Indexes[Todays_ques[8]],
        	t : Titles[Todays_ques[8]],
        	a : Acceptances[Todays_ques[8]],
        	d : Difficulties[Todays_ques[8]],
            l : Links[Todays_ques[8]],
        },

        q9 : {
        	i : Indexes[Todays_ques[9]],
        	t : Titles[Todays_ques[9]],
        	a : Acceptances[Todays_ques[9]],
        	d : Difficulties[Todays_ques[9]],
            l : Links[Todays_ques[9]],
        },

        q10 : {
        	i : Indexes[Todays_ques[10]],
        	t : Titles[Todays_ques[10]],
        	a : Acceptances[Todays_ques[10]],
        	d : Difficulties[Todays_ques[10]],
            l : Links[Todays_ques[10]],
        },

        q11 : {
        	i : Indexes[Todays_ques[11]],
        	t : Titles[Todays_ques[11]],
        	a : Acceptances[Todays_ques[11]],
        	d : Difficulties[Todays_ques[11]],
            l : Links[Todays_ques[11]],
        },

        // Code Chef School Questions.
        q12 : {
            n : SNames[Todays_ques[12]],
            c : SCodes[Todays_ques[12]],
            s : SSubmissions[Todays_ques[12]],
            a : SAccuracies[Todays_ques[12]],
        },

        q13 : {
            n : SNames[Todays_ques[13]],
            c : SCodes[Todays_ques[13]],
            s : SSubmissions[Todays_ques[13]],
            a : SAccuracies[Todays_ques[13]],
        },

        q14 : {
            n : SNames[Todays_ques[14]],
            c : SCodes[Todays_ques[14]],
            s : SSubmissions[Todays_ques[14]],
            a : SAccuracies[Todays_ques[14]],
        },

        q15 : {
            n : SNames[Todays_ques[15]],
            c : SCodes[Todays_ques[15]],
            s : SSubmissions[Todays_ques[15]],
            a : SAccuracies[Todays_ques[15]],
        },

        // Code Chef Easy Questions.
        q16 : {
            n : ENames[Todays_ques[16]],
            c : ECodes[Todays_ques[16]],
            s : ESubmissions[Todays_ques[16]],
            a : EAccuracies[Todays_ques[16]],
        },

        q17 : {
            n : ENames[Todays_ques[17]],
            c : ECodes[Todays_ques[17]],
            s : ESubmissions[Todays_ques[17]],
            a : EAccuracies[Todays_ques[17]],
        },

        q18 : {
            n : ENames[Todays_ques[18]],
            c : ECodes[Todays_ques[18]],
            s : ESubmissions[Todays_ques[18]],
            a : EAccuracies[Todays_ques[18]],
        },

        q19 : {
            n : ENames[Todays_ques[19]],
            c : ECodes[Todays_ques[19]],
            s : ESubmissions[Todays_ques[19]],
            a : EAccuracies[Todays_ques[19]],
        },

        // Code Chef Medium Questions.
        q20 : {
            n : MNames[Todays_ques[20]],
            c : MCodes[Todays_ques[20]],
            s : MSubmissions[Todays_ques[20]],
            a : MAccuracies[Todays_ques[20]],
        },

        q21 : {
            n : MNames[Todays_ques[21]],
            c : MCodes[Todays_ques[21]],
            s : MSubmissions[Todays_ques[21]],
            a : MAccuracies[Todays_ques[21]],
        },

        q22 : {
            n : MNames[Todays_ques[22]],
            c : MCodes[Todays_ques[22]],
            s : MSubmissions[Todays_ques[22]],
            a : MAccuracies[Todays_ques[22]],
        },

        q23 : {
            n : MNames[Todays_ques[23]],
            c : MCodes[Todays_ques[23]],
            s : MSubmissions[Todays_ques[23]],
            a : MAccuracies[Todays_ques[23]],
        },

        // Code Chef Hard Questions.
        q24 : {
            n : HNames[Todays_ques[24]],
            c : HCodes[Todays_ques[24]],
            s : HSubmissions[Todays_ques[24]],
            a : HAccuracies[Todays_ques[24]],
        },

        q25 : {
            n : HNames[Todays_ques[25]],
            c : HCodes[Todays_ques[25]],
            s : HSubmissions[Todays_ques[25]],
            a : HAccuracies[Todays_ques[25]],
        },

        q26 : {
            n : HNames[Todays_ques[26]],
            c : HCodes[Todays_ques[26]],
            s : HSubmissions[Todays_ques[26]],
            a : HAccuracies[Todays_ques[26]],
        },

        q27 : {
            n : HNames[Todays_ques[27]],
            c : HCodes[Todays_ques[27]],
            s : HSubmissions[Todays_ques[27]],
            a : HAccuracies[Todays_ques[27]],
        },

        // Code Chef Challange Questions.
        q28 : {
            n : CNames[Todays_ques[28]],
            c : CCodes[Todays_ques[28]],
            s : CSubmissions[Todays_ques[28]],
            a : CAccuracies[Todays_ques[28]],
        },

        q29 : {
            n : CNames[Todays_ques[29]],
            c : CCodes[Todays_ques[29]],
            s : CSubmissions[Todays_ques[29]],
            a : CAccuracies[Todays_ques[29]],
        },

        q30 : {
            n : CNames[Todays_ques[30]],
            c : CCodes[Todays_ques[30]],
            s : CSubmissions[Todays_ques[30]],
            a : CAccuracies[Todays_ques[30]],
        },

        q31 : {
            n : CNames[Todays_ques[31]],
            c : CCodes[Todays_ques[31]],
            s : CSubmissions[Todays_ques[31]],
            a : CAccuracies[Todays_ques[31]],
        },
    });
});

app.get('/developer', (req, res) => {
	res.render('developer-page')
});

app.get('/status', (req, res) => {
    res.send('<h1>' + status + '</h1>');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server Started");
});
