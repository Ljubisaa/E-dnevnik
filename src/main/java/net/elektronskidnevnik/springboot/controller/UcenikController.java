package net.elektronskidnevnik.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.elektronskidnevnik.springboot.repository.UcenikRepository;
import net.elektronskidnevnik.springboot.service.UcenikService;
import net.elektronskidnevnik.springboot.exception.ResourceNotFoundException;
import net.elektronskidnevnik.springboot.model.Ucenik;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class UcenikController {

	@Autowired
	private UcenikRepository ucenikRepository;
	@Autowired
	private UcenikService ucenikService;

	@GetMapping("/ucenici")
	public List<Ucenik> getAllUcenici() {

		return ucenikService.listUcenici();

	}

	@PostMapping("/ucenici")
	public Ucenik createUcenik(@RequestBody Ucenik ucenik) {
		return ucenikRepository.save(ucenik);
	}

	@GetMapping("/ucenici/{id}")
	public ResponseEntity<Ucenik> getUcenikById(@PathVariable Long id) {

		Ucenik ucenik = ucenikRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ucenik ne postoji sa ovim id:" + id));
		return ResponseEntity.ok(ucenik);
	}

	@PutMapping("/ucenici/{id}")
	public ResponseEntity<Ucenik> updateUcenik(@PathVariable Long id, @RequestBody Ucenik ucenikDetails) {

		Ucenik ucenik = ucenikRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ucenik ne postoji sa ovim id: " + id));

		ucenik.setIme(ucenikDetails.getIme());
		ucenik.setPrezime(ucenikDetails.getPrezime());
		ucenik.setPismenaOcjena(ucenikDetails.getPismenaOcjena());
		ucenik.setUsmenaOcjena(ucenikDetails.getUsmenaOcjena());

		Ucenik updatedUcenik = ucenikRepository.save(ucenik);

		return ResponseEntity.ok(updatedUcenik);

	}

	@DeleteMapping("/ucenici/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUcenik(@PathVariable Long id) {

		Ucenik ucenik = ucenikRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ucenik sa id: " + " ne postoji."));

		ucenikRepository.delete(ucenik);

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
