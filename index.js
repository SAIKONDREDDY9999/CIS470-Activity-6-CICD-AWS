exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda! Successfully deployed via GitHub Actions!"),
  };
};
