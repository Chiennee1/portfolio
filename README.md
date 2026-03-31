# Dao Minh Chien - Backend Java Developer Portfolio

Portfolio website introducing my profile, technical strengths, and real projects for Backend Java Internship opportunities.

## Live Portfolio

- Main URL: https://chiendao.dev
- Fallback URL: https://portfolio-9pihvjtqt-chiennee1s-projects.vercel.app

## Recruiter Snapshot

- Name: Dao Minh Chien
- Role target: Backend Java Intern
- Location: Hanoi, Vietnam (On-site/Hybrid)
- Education: Final-year IT student at Hanoi Open University (Expected graduation: Jun 2026)
- Languages: Vietnamese (Native), English (Conversational for technical communication)

## Professional Summary

I focus on backend engineering with Java and Spring Boot, building production-quality REST APIs with clear architecture, security, and performance in mind. My strongest project is a Library Management System API with 60+ endpoints, JWT multi-device authentication, query optimization, asynchronous email workflows, and automated tests.

Beyond coding, I tutored 10+ students in Data Structures and Algorithms, which strengthened my communication, mentoring, and collaboration skills in technical environments.

## Core Technical Strengths

- Backend: Java 21, Spring Boot 3, Spring Security, Spring Data JPA, Hibernate
- API and Security: RESTful API design, JWT (access/refresh), RBAC, BCrypt, OpenAPI/Swagger
- Database: MySQL 8, SQL Server, JPQL, Optimistic Locking, N+1 query optimization
- DevOps/Tools: Docker, Docker Compose, Git/GitHub, IntelliJ IDEA, Spring Actuator
- Testing: JUnit 5, Mockito, BDD-style testing
- Frontend support: React, TypeScript, Vite

## Featured Project

### Library Management System - REST API

- Repository: https://github.com/Chiennee1/library-management
- Duration: Dec 2025 - Present
- Scope: Production-grade backend for a full library management platform

Key outcomes:
- Designed a 9-entity domain model with soft delete, audit timestamps, and `@Version` optimistic locking to handle concurrent updates safely.
- Implemented dual-token JWT authentication (24h access + 7d refresh), token revocation, and per-device logout.
- Protected and structured 60+ API endpoints across 11 controllers.
- Eliminated N+1 queries by switching to batch JPQL `GROUP BY` strategy, reducing per-page query growth from O(2N+1) to a constant query count.
- Added 5 scheduled cron jobs and async email notifications using Thymeleaf templates.
- Packaged with Docker Compose and validated critical flows with JUnit 5 + Mockito.

## Other Projects

### Food Ordering App
- Repository: https://github.com/Chiennee1/Foodorderingapp
- Stack: React, TypeScript, Vite, CSS
- Highlights: Type-safe component architecture, Figma-to-code workflow, responsive UI.

### Aura Scent - AI Fragrance App
- Repository: https://github.com/Chiennee1/Aura-Scenrt
- Stack: React, TypeScript, Gemini API, Vite
- Highlights: AI recommendation flow, modular frontend architecture, strict TypeScript models.

## Contact

- Email: chiendao278@gmail.com
- Phone: +84 879 559 213
- GitHub: https://github.com/Chiennee1
- LinkedIn: https://linkedin.com/in/DaoChien
