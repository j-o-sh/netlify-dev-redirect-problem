module.exports.handler = function handler (request, _c, callback) {

  callback(null, {
      statusCode: 200,
      body: `
      <html><body>
      <h1>Nothing to see here</h1>
      <p>Well this sucks... go <a href="/">back?</a></p>
      <hr>
      ${JSON.stringify(request, null, 2)}
      </body></html>`
    })
}
