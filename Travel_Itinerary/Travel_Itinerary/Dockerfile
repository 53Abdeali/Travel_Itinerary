# Use a lightweight Java runtime as the base image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/Travel_Itinerary-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your app runs on (default for Spring Boot is 8080)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
