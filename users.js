
router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from employee', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});