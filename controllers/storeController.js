// when writing middleware, next must always be passed as an argument
exports.myMiddleware = (req, res, next) => {
  req.name = 'Bob';
  // this will create a cookie using cookieParser
  res.cookie('name', 'Steve', {maxAge: 300000});
  // once the above is complete, next passes things off to the next function
  next();
}

// any work that has to happen between the req and res should be handled with middleware
exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}