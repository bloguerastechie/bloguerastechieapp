module.exports = function(req, res) {
  
  var title = 'Blogueras techie contact form';
  res.render('contact', {
    title: title
  });
};