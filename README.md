# Can of Books Server Side

**Author**:
Evan Cheng  

**Version**: 1.2.1

## Overview

### Purpose

The essence of this project revolves around the profound impact books have on our lives. They serve as a gateway to different worlds, offering insights, knowledge, and experiences that shape our understanding and perspectives. This application is not just an academic assignment; it's a journey into recognizing and documenting the transformative power of books. Our goal is to create a personalized digital space where users can keep track of books that have influenced them profoundly and discover new reads that come highly recommended.

### What This Application Is About  

At its core, this application is a CRUD (Create, Read, Update, Delete) web app that focuses on books as its primary resource. It's designed to manage and track information about books that have made an impact on your life and to recommend what to read next. Whether you're looking to reflect on your reading journey, find your next book, or simply organize your reading list, this app aims to be your go-to digital bookshelf.

### Technical Overview  

The application is built on a modern tech stack, integrating a React front-end with an Express back-end, all while leveraging a MongoDB database for storage. This architecture not only allows for a responsive and intuitive user interface but also ensures robust and scalable data management.

### Key Features

Data Management: At the heart of the application is the ability to effectively manage book data. This includes creating a schema in the back-end to model the book data precisely as we want it represented.

    Database Seeding: Initial seed data will populate the database with a curated list of impactful books, setting the stage for personalization and discovery.

    Reading Data: The application focuses on the 'Read' operation from CRUD for this assignment, enabling users to view a collection of books retrieved from the database through the front-end interface.

    User Interface: A clean and user-friendly interface on the front end allows for an engaging experience as users explore books that have made a mark on their lives or discover new recommendations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- MongoDB
- npm or yarn

You can download Node.js from [https://nodejs.org/](https://nodejs.org/) which includes npm. MongoDB can be installed from [https://www.mongodb.com/](https://www.mongodb.com/).

### Installing

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository: git clone <https://github.com/yourRepository/CanOfBooks-Server.git>
2. Install project dependencies
3. Setup your `.env` file with the required environment variables:

      • MONGODB_URI: Your MongoDB connection string.  
      • PORT: The port number on which to run the server.  
4. Seed the database (npm run seed)
5. Start the server (npm start)  

## Architecture

Dependencies:

`cors:` Enables CORS (Cross-Origin Resource Sharing) support, allowing your server to accept requests from different domains, enhancing API accessibility and security.  

`dotenv:` Loads environment variables from a `.env` file into `process.env`, providing a secure and flexible way to manage configuration settings outside of your codebase.  

`express:` A fast, un-opinionated, minimalist web framework for Node.js, designed for building web applications and APIs with ease and efficiency.  

`mongoose:` An elegant MongoDB object modeling tool designed to work in an asynchronous environment, providing a straightforward schema-based solution to model your application data.  

`node:` A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling the development of fast and scalable network applications.  

`chatgpt:` Integrates OpenAI's ChatGPT model for natural language understanding and generation, enhancing application capabilities with advanced AI-driven interactions.  

## Change Log  

04-08-2024 6:45pm - Both repos (backend and frontend) are online.  

04-08-2024 7:45pm - Atlas server connected to backend repo.  

04-08-2024 8:15pm - Backend repo connected to Render.  

04-09-2024 4:00PM - Add new routes to server for POST and DELETE.  

04-09-2024 7:00PM - Update README.md with protocol for starting project and dependencies.

## Estimates

### April 8th  

    Name of feature: User Storage

    Estimate of time needed to complete: 2 hours

    Start time:  9:30pm EST

    Finish time:  11:45pm EST

    Actual time needed to complete: 2 hours and 15 minutes  
  
### April 9th

    Name of feature: POST & DELETE Routes Added  

    Estimate of time needed to complete: 1 hour 30 minutes

    Start time:  4:00pm EST

    Finish time:  5:45pm EST

    Actual time needed to complete: 1 hours and 45 minutes


    Name of feature: SEED & Database Reset Routes Added  

    Estimate of time needed to complete: 1 hour 30 minutes

    Start time:  5:45pm EST

    Finish time:  6:45pm EST

    Actual time needed to complete: 1 hours

## Credit and Collaborations

### Collaborations  

#### Logistical

**What hours will you be available to communicate?**  

8am EST - 11pm EST

**What platform will you use to communicate (ie. Slack, phone …)?**  

Slack/Remo

**How often will you take breaks?**  

As needed.

**What is your plan if you start to fall behind?**  

Utilize TA help and schedule tutoring sessions if needed.

#### Cooperative

**Make a list of each person's strengths.**  

- **Ben:** Communication, teamwork, quick-learner
- **Evan:** Communication, teamwork, creativity

**How can you best utilize these strengths in the development of your application?**  

Good communication with each other is important in order to maintain consistent code and debugging of our application.

**In what areas do you each want to develop greater strength?**  

- **Ben:** Technical concepts and understanding of project set-up and initiation. Proficiency with coding procedure.

- **Evan:** Technical concepts and understanding of project set-up and initiation.

**Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?**  

Require PR review in order to get each person looking at the code and interpreting it.

#### Conflict Resolution

**What will your team do if one person is pulling all the weight while the other person is not contributing?**  

Attempt to communicate the issue, but if no headway is made then inform an reach out to TA’s or faculty to mediate and discussion.

**What will your team do if one person is taking over the project and not letting the other member contribute?**  

Attempt to communicate the issue, but if no headway is made then inform an reach out to TA’s or faculty to mediate and discussion.

**How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?**  

Leave comments and descriptions for specific code. Overall, communicate any questions or concerns so that both parties are aware and if able to, can provide insight or help. Two is one and one is none.
