## Running with Docker

This project includes Docker and Docker Compose setup for easy local development and deployment.

### Requirements
- Docker (latest recommended)
- Docker Compose (v2+)
- Node.js version: `22.13.1` (automatically set in Dockerfile)

### Environment Variables
- If you have environment variables, create a `.env.local` file in the project root. Uncomment the `env_file` line in `docker-compose.yml` to use it.

### Build and Run
1. Build and start the app:
   ```sh
   docker compose up --build
   ```
   This will build the Docker image and start the Next.js app in production mode.

2. Access the app at [http://localhost:3000](http://localhost:3000)

### Ports
- The app exposes port **3000** (Next.js default).

### Notes
- The Dockerfile uses multi-stage builds for optimized production images.
- The app runs as a non-root user for security.
- If you add external services (e.g., databases), update `docker-compose.yml` accordingly.

For more details, see the comments in the provided `Dockerfile` and `docker-compose.yml`. If you encounter issues, ensure your `.env.local` is configured and Docker is running with sufficient resources.