package net.elektronskidnevnik.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.elektronskidnevnik.springboot.model.Ucenik;

@Repository
public interface UcenikRepository extends JpaRepository<Ucenik, Long>{

}
