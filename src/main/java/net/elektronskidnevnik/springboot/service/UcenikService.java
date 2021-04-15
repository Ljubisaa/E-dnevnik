package net.elektronskidnevnik.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import net.elektronskidnevnik.springboot.exception.ResourceNotFoundException;
import net.elektronskidnevnik.springboot.model.Ucenik;
import net.elektronskidnevnik.springboot.repository.UcenikRepository;

@Service
public class UcenikService {

	@Autowired
	private UcenikRepository ucenikRepository;

	public List<Ucenik> listUceniciService() {
		List<Ucenik> ucenici = ucenikRepository.findAll();
		
//		dodavanjeVrednostiNulaOcjenama(ucenici);
		izracunavanjeZakljucne(ucenici);
		
		return ucenici;
	}
    //Dodavanje vrijednosti nula ocjenama prilikom slanja liste ucenika angularu(trenutno iskomentarisano posto nule dodaje druga metoda prilikom kreiranja ucenika bez ocjena)
	/*private List<Ucenik> dodavanjeVrednostiNulaOcjenama(List<Ucenik> ucenici) {

		for (int i = 0; i < ucenici.size(); i++) {

			if (ucenici.get(i).getUsmenaOcjena() == null) {
				ucenici.get(i).setUsmenaOcjena(0);
			}

			if (ucenici.get(i).getPismenaOcjena() == null) {
				ucenici.get(i).setPismenaOcjena(0);
			}
		}

		return ucenici;
	}*/

	//Automatsko zakljucivanje ocjena prilikom povlacenja liste ucenika u angular gdje su onda zakljucne ocjene spremne i ispisuju se na aktiviranje dugmeta zakljuci
	private List<Ucenik> izracunavanjeZakljucne(List<Ucenik> ucenici) {

		for (int i = 0; i < ucenici.size(); i++) {

			if (ucenici.get(i).getPismenaOcjena() != null && ucenici.get(i).getUsmenaOcjena() != null) {
				ucenici.get(i).setZakljucena(true);

				Double one = Double.valueOf(ucenici.get(i).getUsmenaOcjena());
				Double two = Double.valueOf(ucenici.get(i).getPismenaOcjena());

				ucenici.get(i).setZakljucenaOcjena((one + two) / 2);
				ucenikRepository.save(ucenici.get(i));
			}

		}
		return ucenici;
	}

	public ResponseEntity<Map<String, Boolean>> deleteUcenikService(Long id) {

		Ucenik ucenik = ucenikRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ucenik sa id: " + " ne postoji."));

		ucenikRepository.delete(ucenik);

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	public ResponseEntity<Ucenik> updateUcenikService(Long id, Ucenik ucenikDetails) {

		Ucenik ucenik = ucenikRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ucenik ne postoji sa ovim id: " + id));

		ucenik.setIme(ucenikDetails.getIme());
		ucenik.setPrezime(ucenikDetails.getPrezime());
		ucenik.setPismenaOcjena(ucenikDetails.getPismenaOcjena());
		ucenik.setUsmenaOcjena(ucenikDetails.getUsmenaOcjena());

		Ucenik updatedUcenik = ucenikRepository.save(ucenik);

		return ResponseEntity.ok(updatedUcenik);
	}
    
	//Dodavanje vrijednosti nula ocjenama prilikom kreiranja ucenika(ako mu je ocjena null, tj ako nema ocjenu), i sa nulom idu u bazu
	public Ucenik set0ToOcjena(Ucenik ucenik) {
		
		if(ucenik.getPismenaOcjena() == null) {
			ucenik.setPismenaOcjena(0);
		}
		
		if(ucenik.getUsmenaOcjena() == null) {
			ucenik.setUsmenaOcjena(0);
		}
		
		return ucenik;
	}
}