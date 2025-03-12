test("GET to api/v1/status should be 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to ExtracaoSei should be 200", async () => {
  const response = await fetch("https://extracaosei.4mine.com.br:8443");
  expect(response.status).toBe(200);
});
