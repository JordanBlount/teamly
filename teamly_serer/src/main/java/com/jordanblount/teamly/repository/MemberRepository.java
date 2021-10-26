package com.jordanblount.teamly.repository;

import java.util.List;

import com.jordanblount.teamly.model.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    
    List<Member> findByTeamId(Long teamId);
}
