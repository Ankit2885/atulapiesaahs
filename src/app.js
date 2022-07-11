const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const { port } = require('./config/env')
const httpLogger = require('./logger/httpLogger')

const webCompanyRoutes = require('./routes/webRoutes/companyDetails')
const webUserRoutes = require('./routes/webRoutes/userDetails')
const adminCompanyRoutes = require('./routes/adminRoutes/company')
const productService = require('./routes/adminRoutes/productService')

app.use(bodyParser.json())
app.use(httpLogger)

app.use('/company', webCompanyRoutes)
app.use('/user', webUserRoutes)
app.use('/admin', adminCompanyRoutes)
app.use('/prodService', productService);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});