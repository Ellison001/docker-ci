'use strict';

var request = require("supertest"),
    app = require("../app");

test('Correct users returned', function (t) {
  request(app)
    .get('/')
    .expec(200)
    });
});
