console.log("Hello Glossier");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3CZWKwGJ23LuAr'}).base('appuh6UP8Jbv5DSNl');

base("fan_page").select({}).eachPage(gotPageOfFan_page, gotAllFan_page);
const glossiers = [];
function gotPageOfFan_page(records, fetchNextPage) {
	console.log("gotPageOfFan_page()");
	glossiers.push(...records);
	fetchNextPage();
}
function gotAllFan_page(err) {
	console.log("gotAllFan_page()");

	if (err) {
		console.log("error loading fan_page");
		console.error(err);
		return;
	}

	showFan_page();
}
function showFan_page() {
	console.log("showFan_page()");

	// const glossier = [];
	const glossiersContainer = document.querySelector("#container");

	glossiers.forEach((glossier) => {
		console.log("\nGlossiers data fields:")
		console.log(glossier.fields)

		const glossiersImage = document.createElement("img");

		glossiersImage.src = glossier.fields.image[0].url;
		console.log(glossier.fields.image[0].url);

		glossiersContainer.appendChild(glossiersImage);

		const glossiersName = document.createElement("h1")

		glossiersName.innerHTML = glossier.fields.name;

		glossiersContainer.appendChild(glossiersName);

		const glossiersDescription  = document.createElement("p");

		glossiersDescription.innerHTML = glossier.fields.description;

		glossiersContainer.appendChild(glossiersDescription);

	});
}


// function consoleLogTable1() {
// 	console.log("consoleLogTable1()");
// 	Table1.forEach((Table1) => {
// 		console.log("Table1:", Table1);

//   // console.log("gotPageOfPeople()");
//   console.log("There are "+records.length+" items in records");
//    // people.push(...records);
//   // request more pages
//   fetchNextPage();
// }

//   showTable1();

// function showTable1() {
// 	console.log("showTable1()");

// 	const Table1Container = document.querySelector
// 	("#container");

// 	Table1.forEach((Table1) => {



// 		const cerealImg = document.createElement("img");

// 		cerealImg.scr = cereal.fields.imges[0].url;

// 		cerealContainer.appendChild(cerealImg);
// 	};
// }
// // base('Table 1').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Title'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });
    