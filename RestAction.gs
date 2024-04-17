function doGet(e) {

  let fileName = "";
  if(e.pathInfo === "success"){
    fileName = "success";
  }else{
    fileName = "form";
  }

  template = HtmlService.createTemplateFromFile(fileName);
  template.url = ScriptApp.getService().getUrl();
  const html = template.evaluate().setTitle("ユーザー登録");
  return html;

}
