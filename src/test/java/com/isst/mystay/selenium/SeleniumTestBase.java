package com.isst.mystay.selenium;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class SeleniumTestBase {

	protected WebDriver driver;

	@BeforeEach
	public void setUp() {
		// Configura aquí el WebDriver según el navegador que prefieras usar
		// Ejemplo con Chrome
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\drmor\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();

		// Ejemplo con Firefox
		// System.setProperty("webdriver.gecko.driver",
		// "C:\\Users\\drmor\\Downloads\\geckodriver.exe");
		// driver = new FirefoxDriver();

		// Ejemplo con Edge
		// System.setProperty("webdriver.edge.driver", "path/to/edgedriver");
		// driver = new EdgeDriver();

		// Configuraciones adicionales (opcional)
		driver.manage().window().maximize(); // Maximiza la ventana del navegador
		driver.manage().deleteAllCookies(); // Borra todas las cookies antes de comenzar las pruebas
	}

	@AfterEach
	public void tearDown() {
		if (driver != null) {
			driver.quit(); // Cierra el navegador y finaliza la sesión del WebDriver
		}
	}
}
