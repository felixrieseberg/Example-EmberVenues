module.exports = function (app) {
  var express = require('express');
  var venuesRouter = express.Router();

  venuesRouter.get('/', function (req, res) {
    res.send([{
        "Id": "1",
        "Name": "Halo",
        "Image": "http://www.image.com",
        "Posts": 152,
        "FriendlyName": "halo",
        "Created": "2014-03-21T19:19:53.773",
        "Follows": 1,
        "Type": "Games"
      }, {
        "Id": "2",
        "Name": "Call of Duty",
        "Image": "http://www.image.com",
        "Posts": 152,
        "FriendlyName": "call-of-duty",
        "Created": "2014-03-21T19:19:53.773",
        "Follows": 0,
        "Type": "Games"
      }]);
  });

  venuesRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  venuesRouter.get('/:id', function (req, res) {
    res.send({
      'venues': {
        id: req.params.id
      }
    });
  });

  venuesRouter.put('/:id', function (req, res) {
    res.send({
      'venues': {
        id: req.params.id
      }
    });
  });

  venuesRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  app.use('/api/venues', venuesRouter);
};