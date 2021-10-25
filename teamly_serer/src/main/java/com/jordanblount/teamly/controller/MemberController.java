package com.jordanblount.teamly.controller;

import java.util.List;

import com.jordanblount.teamly.exception.ResourceNotFoundException;
import com.jordanblount.teamly.model.Member;
import com.jordanblount.teamly.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/members/")
public class MemberController {
    
    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("all")
    public List<Member> getMembers() {
        return this.memberRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("This member does not exist."));
        return ResponseEntity.ok(member);
    }
}
