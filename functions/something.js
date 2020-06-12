module.exports.handler = function handler (_q, _c, callback) {
  callback(null, {
      statusCode: 200,
      body: `
      <html><body>
      <h1>Nothing to see here</h1>
      <p>Well this sucks... go <a href="/">back?</a></p>
      </body></html>`
    })
}
