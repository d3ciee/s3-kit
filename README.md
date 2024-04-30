# S3-Kit

Welcome to S3-Kit, a highly opinionated template for building applications with Svelte, Drizzle, LibSQL, Tailwind, and shadcn/ui.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and pnpm.
- You have a `./.data/local.sqlite` file in your project root.

### Installing S3-Kit

To install S3-Kit, follow these steps:

1. Clone the repo:
    ```bash
    git clone https://github.com/d3ciee/s3-kit.git
    ```

2. Navigate to the project directory:
    ```bash
    cd s3-kit
    ```

3. Install the dependencies:
    ```bash
    pnpm install
    ```

### Configuration

1. Create a `.env` file in your project root and add your environment variables as described in `.env.example`.

### Running Migrations

To set up your database, run the following commands:

1. Generate migrations:
    ```bash
    pnpm migrations:generate
    ```

2. Push migrations:
    ```bash
    pnpm migrations:push
    ```

## Usage

After following these steps, you should be able to start the development server:

```bash
pnpm run dev
```

## Contributing to S3-Kit

To contribute to S3-Kit, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Contact

If you want to contact me, you can reach me at `decefemz@gmail.com`.

## License

This project uses the following license: `MIT`.
```
