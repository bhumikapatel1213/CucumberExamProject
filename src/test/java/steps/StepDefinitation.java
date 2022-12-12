package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.ColorPage;
import page.TestBase;

public class StepDefinitation extends TestBase{
	ColorPage colorPage;
	
	private static final String SKY_BLUE = "#87ceeb";
	private static final String WHITE = "#ffffff";
	
	
	@Given("User is at Validation Page for Background Color$")
	public void user_is_at_Validation_Page_for_Background_Color() {
		initDriver();
		driver.get("https://techfios.com/test/101/");
	}
	
	@When ("^User click on set sky blue button$")
	public void user_click_on_set_sky_blue_button(){
		colorPage = PageFactory.initElements(driver, ColorPage.class);
		colorPage.clickSkyBlueButton();
	}

	@Then("^The background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue(){
		String expectedSkyBlue = colorPage.background();
		Assert.assertEquals(SKY_BLUE, expectedSkyBlue);
	}
	
	@When ("^User click on set white button$")
	public void user_click_on_set_white_button() {
		colorPage = PageFactory.initElements(driver, ColorPage.class);
		colorPage.clickWhiteButton();;
	}

	@Then("^The background color will change to white$")
	public void the_background_color_will_change_to_white() {
	    String expectedWhite = colorPage.background();
	    Assert.assertEquals(WHITE, expectedWhite);
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}


}
