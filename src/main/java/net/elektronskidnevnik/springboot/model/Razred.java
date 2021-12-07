package net.elektronskidnevnik.springboot.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="razred_tbl")
@Setter
@Getter
@ToString

public class Razred {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="razred_odjeljenje")
	private String razredOdjeljenje;
    @JsonIgnore
	@OneToMany(cascade=CascadeType.ALL, mappedBy="razred")
	private Set<Ucenik> ucenik;
}

