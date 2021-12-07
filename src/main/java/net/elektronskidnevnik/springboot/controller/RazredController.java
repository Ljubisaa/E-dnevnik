package net.elektronskidnevnik.springboot.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.elektronskidnevnik.springboot.model.Razred;

import net.elektronskidnevnik.springboot.service.RazredService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class RazredController {

	private RazredService razredService;
	
	public RazredController(RazredService razredService) {
		super();
		this.razredService = razredService;
	}

	@GetMapping("/razred")
	public List<Razred> getAllRazred() {

		return razredService.listRazredService();
	}

}
