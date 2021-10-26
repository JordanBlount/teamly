package com.jordanblount.teamly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.jordanblount.teamly.model.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    List<Team> findByTeamName(String name);

    List<Team> findByTeamType(Integer type);

    List<Team> findByOrgId(Integer ordId);
}
