var express = require('express'),
    app = express(),
    path = require('path');

app.set('port', (process.env.PORT || 9999));
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile("index.html", {
        root: path.join(__dirname, "public/views")
    });
});
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
