'use strict';

var request = require("supertest"),
    

test('Correct users returned', function (t) {
  request(app)
    .get('/')
    .expect(200)
    });
});
