const express = require('express')
const app = express()
const port = 3000
const MLR = require("ml-regression-multivariate-linear");

const x = [
  [100, 250],
  [200, 300],
  [300, 230],
  [400, 100],
];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [
  [10000],
  [11500],
  [12000],
  [15000]
];

const mlr = new MLR(x, y);

app.post('/:numparticipants/:price', (req, res) => {
      let a = new Array;
      a.push(parseInt(req.params.numparticipants));
      a.push(parseInt(req.params.price));
      res.json(mlr.predict(a));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})