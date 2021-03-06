package de.dennismaas.thegramfworkingtitle.utils;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.auth.InstanceProfileCredentialsProvider;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonS3ClientUtils {

    @Value("${aws.access.key}")
    private String accessKey;

    @Value("${aws.secret.key}")
    private String secretKey;

    private final Regions clientRegion = Regions.EU_CENTRAL_1;

    @Bean
    public BasicAWSCredentials getAwsCredentials() {
        return new BasicAWSCredentials(accessKey, secretKey);
    }

    @Bean
    public AmazonS3 getS3Client() {

        return AmazonS3ClientBuilder.standard()
        //TODO find out, why '.withCredentials(new InstanceProfileCredentialsProvider(true))' does not work in local dev and if deployed works with comment
                .withRegion(clientRegion)//.withCredentials(new InstanceProfileCredentialsProvider(true)) worked on Mac and on deployed
                .build();
    }

}
