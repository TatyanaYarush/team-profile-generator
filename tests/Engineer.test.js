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

test("Test to create an Engineer Object with all the parameters", () => {
    const x = new Engineer("tat7res5", 715, "test3@tanya.com", "Tatnya7Git");
    expect(typeof(x.name)).toBe("string");
    expect(typeof(x.id)).toBe("number");
    expect(typeof(x.email)).toBe("string");
    expect(typeof(x.github)).toBe("string");
});