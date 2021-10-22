package com.jordanblount.teamly.controller;

import java.util.List;

import com.jordanblount.teamly.model.Member;
import com.jordanblount.teamly.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/members/")
public class MemberController {
    
    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("all")
    public List<Member> getMembers() {
        return this.memberRepository.findAll();
    }
}
