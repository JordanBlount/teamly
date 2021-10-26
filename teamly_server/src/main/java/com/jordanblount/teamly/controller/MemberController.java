package com.jordanblount.teamly.controller;

import java.util.List;

import com.jordanblount.teamly.exception.ResourceNotFoundException;
import com.jordanblount.teamly.model.Member;
import com.jordanblount.teamly.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/members/")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    // Create

    @PostMapping("/")
    public ResponseEntity<Member> createMember(@RequestBody Member member) {
        try {
            Member m = memberRepository.save(member);
            return new ResponseEntity<>(m, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Read

    @GetMapping("/")
    public List<Member> getMembers() {
        return this.memberRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This member does not exist."));
        return ResponseEntity.ok(member);
    }

    @GetMapping("/team/{teamId}")
    public List<Member> getMemberByTeamId(@PathVariable Long teamId) {
        List<Member> members = memberRepository.findByTeamId(teamId);
        if (members.isEmpty()) {
            System.out.println(new ResourceNotFoundException("Members(s) with the teamId " + teamId + " not found"));
        }
        return members;
    }

    // Update

    @PutMapping("/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable long id, @RequestBody Member member) {
        Member m = memberRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Member not found."));
        m.setFirstName(member.getFirstName());
        m.setLastName(member.getLastName());
        m.setAddress(member.getAddress());
        m.setJobPosition(member.getJobPosition());
        m.setStartDate(member.getStartDate());
        m.setIsRemote(member.getIsRemote());
        m.setLocation(member.getLocation());
        m.setNativeLanguage(member.getNativeLanguage());
        m.setProfileImg(member.getProfileImg());
        m.setTeamPosition(member.getTeamPosition());
        m.setPhoneNumber(member.getPhoneNumber());
        m.setCompleteName(member.getCompleteName());
        m.setEmail(member.getEmail());
        m.setTeamId(member.getTeamId());
        Member updatedMember = memberRepository.save(m);
        return new ResponseEntity<>(updatedMember, HttpStatus.OK);
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Member> deleteMember(@PathVariable long id) {
        try {
            memberRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
