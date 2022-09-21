const errorHandler =  (error, request, response, next) => {
	const statusCode = response.statusCode ? response.statusCode : 500;
	
	response.status(statusCode)

	response.json({
		message : error.message,
		stack : process.env.NODE_ENV === 'production' ? null : error.stack // more things , when project in production error is not send
	})
}

module.exports = {
	errorHandler
}