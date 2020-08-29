// Import the js file to test
import { validateInput } from "../client/js/validateInput";

// Client side test for input validation
describe("Testing the input validation function", () => {
    test("Testing the validateInput() function", () => {
        // Added mock alert to suppress jest error
        window.alert = jest.fn();

        const userInput = 
        { 
            to: "Amsterdam",
            from: "Boston",
            startDate: "",
            endDate: ""
        }
        expect(validateInput(userInput)).toBe(false);
    })
});

// Server side test for 
// describe("Testing the server request for getting the location", () => {
//     test("Testing the getData() function with /getLocation input", () => {

//         const coordinates = {lat: "52.37403", long: "4.88969"};
//         console.log(getData('/getLocation', { location: "Amsterdam"}));
//         expect(getData('/getLocation', { location: "Amsterdam"})).toBe(coordinates);
//     })
// });

// const app = require("../src/server/server.js"); 
// const supertest = require("supertest");
// const request = supertest(app);

// describe("Test API endpoints", () => {
//     test("Use GET to render index.html", async () => {
//       const response = await app.get("/").expect(200);
//     });
// });    