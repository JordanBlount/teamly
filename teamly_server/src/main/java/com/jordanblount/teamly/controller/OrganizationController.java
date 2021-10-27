package com.jordanblount.teamly.controller;

import java.util.List;

import com.jordanblount.teamly.exception.ResourceNotFoundException;
import com.jordanblount.teamly.model.Organization;
import com.jordanblount.teamly.repository.OrganizationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/organizations")
public class OrganizationController {
    
    @Autowired
    private OrganizationRepository organizationRepository;

    @GetMapping("/all")
    public List<Organization> getOrganizations() {
        return this.organizationRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Organization> getOrganizationById(@PathVariable Long id) {
       Organization organization = organizationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("This organization was not found."));
       return ResponseEntity.ok(organization);
    }
}
