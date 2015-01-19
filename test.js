var PREFIX = 'numtel:template-from-string - ';

Tinytest.add(PREFIX + 'Basic', function(test){
  var tpl = Template.fromString('<p id="test-el" style="display:none;">Cowbell</p>');
  Blaze.render(tpl, document.body);
  var el = document.getElementById('test-el');
  test.equal(el.innerHTML, 'Cowbell');
});
