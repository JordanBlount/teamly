package com.jordanblount.teamly.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jordanblount.teamly.model.Team;
import com.jordanblount.teamly.repository.TeamRepository;

@RestController
@RequestMapping("api/teams/")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;
    
    @GetMapping("all")
    public List<Team> getTeams() {
        return this.teamRepository.findAll();
    }
}
