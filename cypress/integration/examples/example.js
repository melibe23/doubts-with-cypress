import {
  paths,
  keys
} from "../../support/data";

describe(`RegExp issue`, () => {
  paths.forEach((path, index) => {
    const key = keys[index];
    beforeEach(() => {
      cy.fixture("example.json").as("fixture");
      cy.visit(`https://www.getapp.com/website-ecommerce-software/ecommerce/`)

    });

    it("First attempt - Fails", function () {
      cy.get('head meta[name="description"]').then(p => {
        expect(p).to.have.attr("content", this.fixture[key].description);
      });
    });

    it("Second attempt - Fails", function () {
      cy.get('head meta[name="description"]').then(p => {
        const regExp = new RegExp(this.fixture[key].description)
        expect(p).to.have.attr("content", regExp);
      });
    });

    // THIS ONEEEEE IS THE ANSWEEEER
    it.only("Third attempt - PASSED", function () {
      cy.get('head meta[name="description"]').then(p => {
        const regExp = new RegExp(this.fixture[key].description)
        expect(p).to.have.attr("content").match(regExp);
      });
    });

    it("Fourth attempt - PASSED", function () {
      cy.get('head meta[name="description"]').then(p => {
        expect(p).to.have.attr("content").match(/^Reviewing [0-9]+ of the best ecommerce software applications.  GetApp lets you compare the list of tools and vendors that provide ecommerce software solutions.$/);
      });
    });
  });
})

// Because the type of testing I have to do, I cannot go with the 4th attemp. 