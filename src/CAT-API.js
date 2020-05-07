const express = require('express')

var app = express.createServer(express.logger())

app.use(express.bodyParser())

/*
function createEntity() {
  app.post('/', function(request, response) {
    response.write(request.body.user)
    response.end()
  })
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/-CAT-Agent-Creation-Form-API-', (req, res) => {
  	request(
    	{ url: 'https://portal.copelandgroupusa.com/api/-CAT-Agent-Creation-Form-API-' },
    	(error, response, body) => {
      		if (error || response.statusCode !== 200) {
        		return res.status(500).json({ type: 'error', message: err.message });
      		}

      		res.json(JSON.parse(body));
		}
		)
});
*/

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => ());
