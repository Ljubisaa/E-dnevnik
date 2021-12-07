package net.elektronskidnevnik.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import net.elektronskidnevnik.springboot.model.Razred;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel="razred", path="razred")
public interface RazredRepository extends JpaRepository<Razred, Long>{

}
