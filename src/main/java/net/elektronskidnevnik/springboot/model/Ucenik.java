package net.elektronskidnevnik.springboot.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "ucenici_tbl")
@Setter
@Getter
@ToString
public class Ucenik {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String ime;
	private String prezime;
	private Integer usmenaOcjena;
	private Integer pismenaOcjena;
	private Double zakljucenaOcjena;
	private boolean zakljucena;

	@ManyToOne(fetch = FetchType.EAGER)
	private Razred razred;

}