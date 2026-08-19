# Bump: Innovative Pothole Management System

> Imagine a system where managing and fixing potholes is streamlined and efficient. Bump is a cutting-edge pothole management application designed to bridge the gap between citizens, contractors, and government authorities. Built with Angular and Spring Boot, and utilizing AWS and Firebase, Bump allows citizens to report potholes with just a few clicks, including GPS location and photos. Contractors can bid on repair jobs, and the government can oversee the entire process, ensuring timely resolutions. With a Progressive Web App (PWA) design, Bump offers offline capabilities, mobile responsiveness, and a user-friendly interface for all stakeholders. Revolutionize pothole management and improve public infrastructure with Bump.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** May 2021
- **Project page:** https://keshav.codes/bump/ (screenshots and diagrams are on that page)
- **Tech:** Angular, Spring Boot, AWS, MySQL, Firebase, PWA, Jira, Bootstrap
- **Source:** https://github.com/keshavlingala/pothole-angular
- **Source (2):** https://github.com/keshavlingala/pothole-api
- **Topics:** Angular Application, Angular Multi module, Spring Boot, Amazon S3, Amazon RDS, Firebase, Progressive Web App, Material Design, MySQL, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

*Figure: Logo*

## Introduction

Bump was built around a problem statement from the Smart India Hackathon (SIH):

> **Problem:** Goa faced heavy rains, and potholes became the government's biggest maintenance challenge. The core issue is coordination — there is a fundamental disconnect between civil agencies, the public, and elected representatives. The goal is a mobile-based dynamic reporting system that keeps information flowing between all stakeholders and improves governance through greater public involvement.

- **Organization:** Govt. of Goa
- **Category:** Software
- **Domain:** Mobile app development

## Project Design

*Figure: Project Design*

> This is a miniaturized software solution for the otherwise very complex paperwork the government handles manually.

An Angular PWA talks to a Spring Boot web server, which in turn communicates with an Amazon S3 bucket and a MySQL database.

### Functionalities

Citizens upload pothole details, with the location captured automatically via GPS at the time the photo is taken. Citizens can also register with their license number and, once approved by the government, act as contractors. Contractors bid on a given pothole, the government selects the best bid and awards the repair contract, and the repair status is then kept up to date for both the government and the reporting citizens.

- Citizens can register pothole complaints directly
- Citizens can offer a contract and bid for the chance to repair a pothole
- Citizens receive updates on the complaints they registered
- Potholes are prioritized to minimize public inconvenience
- Government authorities have full access and control over the system

### Technical Implementation

- Platform independent
- Pothole details are saved even without an internet connection
- Efficient and reliable
- Material Design
- Mobile responsive

## Technology Stack

*Figure: Technology Stack*

## Use Cases

### User Use Case

*Figure: User Use Case*

### Contractor Use Case

*Figure: Contractor Use Case*

## Screenshots

*Figure: User Dashboard*

*Figure: Contractor Dashboard*

*Figure: Admin Dashboard*

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt
