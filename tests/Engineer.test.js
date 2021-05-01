const Engineer = require("../lib/Engineer");

test("Test to set GitHUb account via constructor", () => {
    const testGit = "GitHubUser";
    const testEngineer = new Engineer("Tanya", 123, "test@gmail.com", testGit);
    expect(testEngineer.github).toBe(testGit);
});

test("getRole() Test should return \"Engineer\"", () => {
    const testGit = "Engineer";
    const testEngineer = new Engineer("Tanya", 123, "test@gmail.com", "GitHubUser");
    expect(testEngineer.getRole()).toBe(testGit);
});

test("Test to get GitHub username via getGithub()", () => {
    const testGit = "GitHubUser";
    const testEngineer = new Engineer("Tanya", 123, "test@gmail.com", testGit);
    expect(testEngineer.getGithub()).toBe(testGit);
});


