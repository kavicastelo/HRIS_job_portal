package com.hris.HRIS_job_portal.Repository._private;

import com.hris.HRIS_job_portal.Model._private.UserActivity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Optional;

public interface UserActivityRepository extends MongoRepository<UserActivity, String> {
    @Query("{'lastActive': { $gte: ?0 }}")
    long countActiveUsers(Instant activeSince);

    @Query("{'encryptedIpAddress': ?0, 'endpointAccessed': ?1, 'timestamp': { $gte: ?2 }}")
    Optional<UserActivity> findRecentActivity(String encryptedIpAddress, String endpointAccessed, LocalDateTime fromTimestamp);
}

