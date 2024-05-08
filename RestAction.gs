function doGet(e) {

  let fileName = "";
  if (e.pathInfo === "success") {
    fileName = "success";
  } else {
    fileName = "input";
  }

  template = HtmlService.createTemplateFromFile(fileName);
  template.url = ScriptApp.getService().getUrl();
  const html = template.evaluate().setTitle("ユーザー登録");
  return html;

}


function doPost(form) {

  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("フォームの回答 1");

  sh.appendRow([
    new Date(),
    Session.getActiveUser().getEmail(),
    form.parameter.date_,
    form.parameter.weight_
  ]);

  return doGet("success");
}