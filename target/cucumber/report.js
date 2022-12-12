$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SetColour.feature");
formatter.feature({
  "line": 2,
  "name": "Validate the Background Color",
  "description": "",
  "id": "validate-the-background-color",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BackgroundValidation"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Sky Blue Background",
  "description": "",
  "id": "validate-the-background-color;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is at Validation Page for Background Color",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on set sky blue button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitation.user_is_at_Validation_Page_for_Background_Color()"
});
formatter.result({
  "duration": 6061556600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitation.user_click_on_set_sky_blue_button()"
});
formatter.result({
  "duration": 207720400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitation.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 75028900,
  "status": "passed"
});
formatter.after({
  "duration": 778788000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "White Background Change",
  "description": "",
  "id": "validate-the-background-color;white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Scenario2"
    },
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is at Validation Page for Background Color",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User click on set white button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitation.user_is_at_Validation_Page_for_Background_Color()"
});
formatter.result({
  "duration": 2444214900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitation.user_click_on_set_white_button()"
});
formatter.result({
  "duration": 106089000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitation.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 40687300,
  "status": "passed"
});
formatter.after({
  "duration": 746274700,
  "status": "passed"
});
});