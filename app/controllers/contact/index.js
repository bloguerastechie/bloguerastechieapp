module.exports = function(req, res) {
  
  var subject = 'Blogueras techie contact form';
  res.render('contact', {
    title: subject
  });
};