package net.elektronskidnevnik.springboot.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import net.elektronskidnevnik.springboot.model.Ucenik;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface UcenikRepository extends JpaRepository<Ucenik, Long>{

	public List<Ucenik> findByRazredId(Long razredId);
	
	public List<Ucenik> findByImeContaining(String keyword);
	
	
	public List<Ucenik> findByImeAndPrezime(String ime, String prezime);


}
