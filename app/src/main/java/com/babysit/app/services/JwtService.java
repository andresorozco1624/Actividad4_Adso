package com.babysit.app.services;

import com.babysit.app.entities.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
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
import java.util.function.Function;

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
                .setExpiration(new Date(System.currentTimeMillis()+ 1000*60*60*24) )
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key getKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getUsernameFromToken(String jwt) {
        return getClaim(jwt,Claims::getSubject);
    }

    public boolean isTokenValid(String jwt, UserDetails userDetails) {
        final String username = getUsernameFromToken(jwt);
            return (username.equals(userDetails.getUsername()) && !isTokenExpired(jwt));

    }

    private Claims getClaims(String token){
        return  Jwts
                .parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public <T> T getClaim(String token, Function<Claims,T> claimsResolver){
         final Claims claims = getClaims(token);
         return claimsResolver.apply(claims);
    }

    private Date getExpiration(String token){
        return  getClaim(token, Claims::getExpiration);
    }

    private Boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }

}
