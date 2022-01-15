package net.elektronskidnevnik.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.elektronskidnevnik.springboot.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}
