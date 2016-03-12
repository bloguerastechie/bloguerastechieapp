module.exports = function(req, res) {
  
  var title = 'contact form';
  res.render('contact', {
    title: title
  });
};