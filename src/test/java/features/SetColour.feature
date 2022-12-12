@BackgroundValidation @Regression
Feature: Validate the Background Color

@Scenario1 @Smoke
Scenario: Sky Blue Background
   Given User is at Validation Page for Background Color
   When User click on set sky blue button
   Then The background color will change to sky blue

@Scenario2 @Smoke
Scenario: White Background Change
   Given User is at Validation Page for Background Color
   When User click on set white button
   Then The background color will change to white


  
      
