package com.isst.mystay.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // "**" significa para todas las rutas en tu aplicación
                        .allowedOrigins("http://localhost:3000") // Permite solicitudes CORS desde este origen
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                        .allowedHeaders("*") // Permite todas las cabeceras
                        .allowCredentials(true); // Permite enviar credenciales, como cookies, autenticación básica,
                                                 // etc.
            }
        };
    }
}
