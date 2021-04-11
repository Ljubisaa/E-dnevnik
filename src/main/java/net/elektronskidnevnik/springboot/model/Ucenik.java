package net.elektronskidnevnik.springboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ucenici")
public class Ucenik {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String ime;
	private String prezime;
	private Integer usmenaOcjena;
	private Integer pismenaOcjena;
	private Double zakljucenaOcjena;
	private boolean zakljucena;
	
	public Ucenik() {
		
	}
	
	public Ucenik(String ime, String prezime, int usmenaOcjena, int pismenaOcjena) {
		super();
		this.ime = ime;
		this.prezime = prezime;
		this.usmenaOcjena = usmenaOcjena;
		this.pismenaOcjena = pismenaOcjena;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getIme() {
		return ime;
	}
	public void setIme(String ime) {
		this.ime = ime;
	}
	public String getPrezime() {
		return prezime;
	}
	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public Integer getUsmenaOcjena() {
		return usmenaOcjena;
	}

	public void setUsmenaOcjena(Integer usmenaOcjena) {
		this.usmenaOcjena = usmenaOcjena;
	}

	public Integer getPismenaOcjena() {
		return pismenaOcjena;
	}

	public void setPismenaOcjena(Integer pismenaOcjena) {
		this.pismenaOcjena = pismenaOcjena;
	}

	public Double getZakljucenaOcjena() {
		return zakljucenaOcjena;
	}

	public void setZakljucenaOcjena(Double zakljucenaOcjena) {
		this.zakljucenaOcjena = zakljucenaOcjena;
	}

	public boolean isZakljucena() {
		return zakljucena;
	}

	public void setZakljucena(boolean zakljucena) {
		this.zakljucena = zakljucena;
	}
	
	
	
	
	
}
