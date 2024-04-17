function registerUser(form) {

  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("フォームの回答 1");

  sh.appendRow([
    new Date(),
    Session.getActiveUser().getEmail(),
    form["日付"],	
    form["重さ"]
  ]);

}