# Project Structure
This document outlines the structure of project located in `src` directory.

## Directory Overview
1. Root Files
    - `App.js`: The main entry point for the React application, defining routes and integrating core components like `Sidebar` and `Header`
    - `index.js`: The entry point for rendering the React application into the DOM
2. apiFactory: Contains API factories for creating payloads and managing API interactions only used for Mapping formData field names to api field names of backend for backend calls
3. factory: Contains factory functions for creating structured data objects or mapping API response data to local form data.
4. components: Houses all React components, organized by feature or functionality. [Read More](#components-section)
5. hooks: Custom React hooks for managing state and logic
6. requests: Handles API requests, Calling backend api's
7. sharedData: Manages shared data across the application, such as global state or constants.
8. utils: Utility functions for common operations used throughout the application.
9. validations: Validation logic for forms and data
10. observers: This directory contains observer patterns or listeners used to monitor and react to changes in application state or external events. Observers are used to implement reactive patterns, ensuring components respond to state changes efficiently

### Components Section
