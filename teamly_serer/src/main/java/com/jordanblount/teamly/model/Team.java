package com.jordanblount.teamly.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "team_name")
    private String teamName;

    @Column(name = "team_leader")
    private String teamLeader;
    
    @Column(name = "team_type")
    private String teamType;
    
    @Column(name = "org_id")
    private int orgId;

    @OneToMany(mappedBy = "team")
    private List<Member> members;

    public Team() {

    }

    public Team(String teamName, String teamLeader, String teamType, int orgId) {
        super();
        this.teamName = teamName;
        this.teamLeader = teamLeader;
        this.teamType = teamType;
        this.orgId = orgId; 
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTeamName() {
        return this.teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamLeader() {
        return this.teamLeader;
    }

    public void setTeamLeader(String teamLeader) {
        this.teamLeader = teamLeader;
    }

    public String getTeamType() {
        return this.teamType;
    }

    public void setTeamType(String teamType) {
        this.teamType = teamType;
    }

    public int getOrgIdid() {
        return this.orgId;
    }

    public void setOrgIdid(int orgId) {
        this.orgId = orgId;
    }
  
}