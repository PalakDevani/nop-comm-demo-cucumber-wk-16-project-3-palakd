$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a user I would like to go to computer page into nop commerce website",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6186155400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "computer-page-test;verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should select product in descending order \"Name: Z to A\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 167920000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 984058500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 359083300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 45
    }
  ],
  "location": "ComputerSteps.iShouldSelectProductInDescendingOrder(String)"
});
formatter.result({
  "duration": 83927400,
  "status": "passed"
});
formatter.after({
  "duration": 627952700,
  "status": "passed"
});
formatter.uri("electronicspage.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Page Test",
  "description": "As a user I would like to go to electronics page in nop commerce website",
  "id": "electronics-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2108767701,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To CellPhones Page Successfully",
  "description": "",
  "id": "electronics-page-test;verify-user-should-navigate-to-cellphones-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouseHover On Electronic Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click On Cell Phones",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify cell phone text",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iMouseHoverOnElectronicTab()"
});
formatter.result({
  "duration": 186780900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCellPhones()"
});
formatter.result({
  "duration": 942176901,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iVerifyCellPhoneText()"
});
formatter.result({
  "duration": 54940100,
  "status": "passed"
});
formatter.after({
  "duration": 676417101,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Topmenu Page Test",
  "description": "As a user I would like to select top menu from nop commerce website",
  "id": "topmenu-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2644125000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Computer",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-computer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select Computer tab from top tab menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify computers text",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36101,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iSelectComputerTabFromTopTabMenu()"
});
formatter.result({
  "duration": 885195201,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iVerifyComputersText()"
});
formatter.result({
  "duration": 86245101,
  "status": "passed"
});
formatter.after({
  "duration": 993989400,
  "status": "passed"
});
});