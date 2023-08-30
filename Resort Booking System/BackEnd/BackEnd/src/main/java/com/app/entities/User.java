package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user_registration")
@ToString
public class User extends BaseEntity{

    @Column(length = 25,nullable = false)
	private String fname ;
    
    @Column(length = 25,nullable = false)
    private String lname ;
       
    @Column(name="id_card_number",length=25)
    private String idCardNumber;
    
    @Column(name="phone_number",length=20)
    private String phoneNumber ;
    
//    @Email
    @Column(length=50,nullable = false,unique =true)
    private String email ;
    
    @JsonProperty(access = Access.WRITE_ONLY)
    @Column(length=100)
    private String password ;
    
	@Column(name="user_role", columnDefinition =  "varchar(255) default 'ROLE_USER'",insertable = false)
	@Enumerated(EnumType.STRING)
	private RoleEnum userRoles ;
    
    public User(String email,String password){
    	this.email=email;
    	this.password=password;
    }
    
    public User(Integer id)
    {
    	super(id);
    }
    
    public User(RoleEnum userRoles )
    {
    	this.userRoles = userRoles ;
    }
	   
}
