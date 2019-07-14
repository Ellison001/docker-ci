'use strict';

var request = require("supertest"),
    app = require("../app")

test('Correct users returned', function (t) {
  request(app)
    .get('/')
    .expect(200)
    });
});
