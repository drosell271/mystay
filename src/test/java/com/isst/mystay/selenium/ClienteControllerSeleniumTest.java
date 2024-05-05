package com.isst.mystay.selenium;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.*;
import org.openqa.selenium.WebElement;

public class ClienteControllerSeleniumTest extends SeleniumTestBase {

	@Test
	public void testAgregarCliente() {
		driver.get("http://localhost:8080/clientes");

		// Supongamos que tienes un formulario de cliente con campos para nombre y email
		driver.findElement(By.id("nombre")).sendKeys("Juan Pérez");
		driver.findElement(By.id("email")).sendKeys("juan@example.com");
		driver.findElement(By.id("submit")).click();

		// Asumimos que hay algún elemento en la página que muestra el resultado de la
		// operación
		String resultMessage = driver.findElement(By.id("result")).getText();
		assertTrue(resultMessage.contains("Cliente agregado exitosamente"));
	}

	@Test
	public void testListarClientes() {
		driver.get("http://localhost:8080/clientes");
		// Asegúrate de que la tabla de clientes está presente
		assertTrue(driver.findElement(By.id("tabla-clientes")).isDisplayed());
	}

	@Test
	public void testObtenerClientePorId() {
		// Asegúrate de reemplazar '1' con un ID válido o manejar dinámicamente
		driver.get("http://localhost:8080/clientes/1");
		String nombreCliente = driver.findElement(By.id("nombre")).getText();
		assertEquals("Juan Pérez", nombreCliente);
	}

	@Test
	public void testActualizarCliente() {
		driver.get("http://localhost:8080/clientes/1/edit");

		// Cambiando el nombre del cliente
		WebElement nombre = driver.findElement(By.id("nombre"));
		nombre.clear();
		nombre.sendKeys("Ana López");
		driver.findElement(By.id("submit")).click();

		// Verificamos el cambio
		assertEquals("Ana López", driver.findElement(By.id("nombre")).getText());
	}

	@Test
	public void testEliminarCliente() {
		driver.get("http://localhost:8080/clientes");
		int initialCount = driver.findElements(By.className("cliente")).size();

		driver.findElement(By.id("delete-1")).click(); // Asumimos que cada botón de eliminar tiene un id como
														// 'delete-{idCliente}'

		driver.get("http://localhost:8080/clientes");
		int newCount = driver.findElements(By.className("cliente")).size();
		assertTrue(newCount < initialCount);
	}
}
