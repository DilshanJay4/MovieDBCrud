const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(
      null,
         Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { description } = req.body;
  const { filename } = req.file;
  const filePath = path.join('uploads', filename);

  fs.readFile('data.json', (err, data) => {
    if (err) throw err;

    const database = JSON.parse(data);

    database.push({
      id,
      title,
      description,
      imagePath: filePath,
    });

    fs.writeFile('data.json', JSON.stringify(database), (err) => {
      if (err) throw err;

      res.json({
        success: true,
      });
    });
  });
});

// This code reads the data from the data.json file and sends it to the client as a JSON response when the /data endpoint is requested.

app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});


// Delete Method


app.delete('/movie/:id', (req, res) => {
  const movieId = req.params.id;

  fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    let database = JSON.parse(data);
    const movieIndex = database.findIndex(movie => movie.id === movieId);

    if (movieIndex === -1) {
      res.status(404).send('Movie not found');
      return;
    }

    database.splice(movieIndex, 1);

    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(database), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }

      res.json({
        success: true
      });
    });
  });
});




app.listen(3000, () => {
  console.log('Server started on port 3000');
});

