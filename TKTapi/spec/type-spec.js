var request = require("request");

describe("GET /type/id", function() {
    it("return OneType", function(done) {
        request.get("http://localhost:3000/type/1", function(error, response, body) {
            expect(body).toBe(JSON.stringify({
                "mission": {
                    "id": 1,
                    "libelle": "Herbivore"
                }
            }));
            done();
        });
    });
});