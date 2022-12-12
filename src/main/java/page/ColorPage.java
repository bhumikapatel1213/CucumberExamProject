package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class ColorPage {
WebDriver driver;
	
	public ColorPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.CSS, using = "button[onclick='myFunctionSky()']")
	WebElement SkyBlueBackgroundButton;
	
	@FindBy(how = How.TAG_NAME, tagName = "body")
	WebElement BackgroundElement;
	
	@FindBy(how = How.CSS, using = "button[onclick='myFunctionWhite()']")
	WebElement WhiteBackgroundButton;
	

	//Methods to interact with the Elements
	public void clickSkyBlueButton() {
		SkyBlueBackgroundButton.click();
	}
	
	public void clickWhiteButton() {
		WhiteBackgroundButton.click();
	}	
	
	public String background(){
		String backGroundColor = BackgroundElement.getCssValue("background-color"); 
		//System.out.println(backGroundColor);
		String hexColor = Color.fromString(backGroundColor).asHex(); 
		//System.out.println(hexColor); 
		return hexColor;
	}
	
	
}
