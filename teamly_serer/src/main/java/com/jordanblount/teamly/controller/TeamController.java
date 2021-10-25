package com.jordanblount.teamly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jordanblount.teamly.exception.ResourceNotFoundException;
import com.jordanblount.teamly.model.Team;
import com.jordanblount.teamly.repository.TeamRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/teams/")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;
    
    @GetMapping("all")
    public List<Team> getTeams() {
        return this.teamRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
       Team team = teamRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("This team was not found."));
       return ResponseEntity.ok(team);
    }
}
