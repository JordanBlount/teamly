package com.jordanblount.teamly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jordanblount.teamly.model.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
    
}
