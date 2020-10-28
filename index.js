const express = require('express')
const app = express()
const port = 3000
const MLR = require("ml-regression-multivariate-linear");

const x = [
  [0],
  [1],
  [2],
  [3]
];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [
  [0],
  [2],
  [4],
  [6]
];

const mlr = new MLR(x, y);

app.post('/:numparticipants', (req, res) => {
      let a = new Array;
      a.push(parseInt(req.params.numparticipants));
      res.json(mlr.predict(a));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})