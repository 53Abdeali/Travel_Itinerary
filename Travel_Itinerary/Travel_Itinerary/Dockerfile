FROM openjdk:17-jdk-alpine
WORKDIR /app
VOLUME /tmp
COPY /target/Travel_Itinerary-0.0.1-SNAPSHOT.jar Travel_Itinerary.jar
ENTRYPOINT ["java","-jar","Travel_Itinerary.jar"]
