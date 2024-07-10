package com.babysit.app.services;

import com.babysit.app.entities.UserEntity;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor

@Service
public class JwtService {

    private static final String SECRET_KEY="b06f435a8b44ada4fee1062826c158be13868e68d64d97a1055bc458c7a2afe6";
    public String getToken(UserDetails userDetails) {
        return getToken(new HashMap<>(),userDetails);
    }

    public String getToken(Map<String,Object> extraCalims, UserDetails userDetails ){
        return Jwts.builder()
                .setClaims(extraCalims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000*60*24) )
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key getKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
