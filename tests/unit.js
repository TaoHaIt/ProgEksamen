
const {request, expect } = require("chai");
const chai = require("chai"); //Henter chai
const chaiHttp = require("chai-http"); //Værktøj som chai skal bruge
const app = require("../server") // Får adgang til serveren, så den kan få adgang til diverse endpoints


chai.use(chaiHttp);
describe('Creater user', () => { //Beskriver hvad der skal testes, for at skabe overskuelighed. 

    // Tester om jeg kan oprette en bruger med email, password, userId. 

    describe("POST /users/create", () => {
        it("Create a user", (done) => { // Hvad skal testen gøre?
            chai
            .request(app) // Sender en request til min server og henter post endpoint
            .post("/users/create") 
            .send( {
                email: "test@test.dk", // Keyword 1,2,3.
                password: "test",
                userId: "testing"})
            .end((error, res) => {
                expect(error).to.be.null;
                expect(res.status).to.equal(200);

                done(); // Done funktionen kaldes til slut
        
            });
        });
    });
});
// testen passer og sender en ny bruger til databasen. 