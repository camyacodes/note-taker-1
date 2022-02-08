const notes = require("./data/notes");
const express = require("express");
const app = express();

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

app.get("/api/notes/:id", (req, res) => {
  const results = findById(req.params.id, notes);
  // if (req.query) {
  //   results = filterByQuery(req.query, results)
  // }
	res.json(results);
});

app.get("/api/notes", (req, res) => {
 
	res.json(notes);
});



app.post('/api/notes', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// function filterByQuery(query, notesArray) {
//   let filteredResults = notesArray;
  
// 	if (query.id) {
// 		filteredResults = filteredResults.filter(
// 			(notes) => notes.id === query.id
// 		);
//   }
  
//   return filteredResults;
// }

app.listen(3001, () => {
	console.log(`API server now on port 3001!`);
});
