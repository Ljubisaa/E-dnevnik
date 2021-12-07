package net.elektronskidnevnik.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.elektronskidnevnik.springboot.model.Razred;
import net.elektronskidnevnik.springboot.repository.RazredRepository;

@Service
public class RazredService {

	private RazredRepository razredRepository;
	
	public RazredService(RazredRepository razredRepository) {
		super();
		this.razredRepository = razredRepository;
	}

	public List<Razred> listRazredService() {
		List<Razred> razred = razredRepository.findAll();

		return razred;
	}

}
