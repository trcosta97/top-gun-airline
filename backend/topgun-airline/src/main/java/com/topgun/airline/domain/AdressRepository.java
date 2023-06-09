package com.topgun.airline.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdressRepository extends JpaRepository<Adress, Long> {
    List<Adress> findAllByActiveTrue();
}