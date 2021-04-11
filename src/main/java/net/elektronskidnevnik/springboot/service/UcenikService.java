package net.elektronskidnevnik.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.elektronskidnevnik.springboot.model.Ucenik;
import net.elektronskidnevnik.springboot.repository.UcenikRepository;

@Service
public class UcenikService {

	@Autowired
	private UcenikRepository ucenikRepository;
	
	
	

	public List<Ucenik> listUcenici() {
		List<Ucenik> ucenici = ucenikRepository.findAll();
		
		
		for(int i = 0; i < ucenici.size(); i++) {
			
			if(ucenici.get(i).getPismenaOcjena() != null && ucenici.get(i).getUsmenaOcjena() != null) {
				ucenici.get(i).setZakljucena(true);
				
				Double one = Double.valueOf(ucenici.get(i).getUsmenaOcjena());
				Double two = Double.valueOf(ucenici.get(i).getPismenaOcjena());
				
				ucenici.get(i).setZakljucenaOcjena((one + two) / 2);
				ucenikRepository.save(ucenici.get(i));
			}
		
		}

		for (int i = 0; i < ucenici.size(); i++) {

			if (ucenici.get(i).getUsmenaOcjena() == null) {
				ucenici.get(i).setUsmenaOcjena(0);
			}

		}
		for (int i = 0; i < ucenici.size(); i++) {

			if (ucenici.get(i).getPismenaOcjena() == null) {
				ucenici.get(i).setPismenaOcjena(0);
			}
		}
		
		
		return ucenici;
	}
}