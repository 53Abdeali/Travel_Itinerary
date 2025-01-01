# Use a lightweight Java runtime as the base image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the Maven build files
COPY . .

# Build the JAR file using Maven
RUN ./mvnw clean package

# Copy the built JAR file into the container
COPY target/Travel_Itinerary-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
