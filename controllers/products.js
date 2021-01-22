const products = [];

// Get AddProduct Page
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

// Get (Form data) AddProduct Page
exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

// Get Products (Shop Page)
exports.getProducts = (req, res, next) => {
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
};