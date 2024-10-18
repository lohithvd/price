// tests/lambda.test.js
const { handler } = require('../index');

test('Lambda function runs successfully', async () => {
  const result = await handler({});
  expect(result.statusCode).toBe(200);
});
