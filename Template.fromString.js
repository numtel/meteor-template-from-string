// numtel:template-from-string
// MIT License, ben@latenightsketches.com

Template.fromString = function(str){
  var templateTagOpen = str.match(/<template name="([^"]+)">/g);
  str = str.replace(templateTagOpen], '');
  str = str.replace('</template>', '');
  var spacebarsStr = SpacebarsCompiler.compile(str, { isTemplate: true });
  var spacebarsFun = Function(extractFuncBody(spacebarsStr));
  return new Blaze.Template(spacebarsFun);
};

var extractFuncBody = function(funStr){
  var start = funStr.indexOf('{');
  var end = funStr.lastIndexOf('}');
  if(start === -1 || end === -1)
    throw new Error('invalid function string');

  return funStr.substr(start + 1, end - start - 1);
};
