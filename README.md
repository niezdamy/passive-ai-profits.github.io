# Passive AI Profits

[![GitHub Pages Deploy](https://github.com/niezdamy/passive-ai-profits.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/niezdamy/passive-ai-profits.github.io/actions/workflows/deploy.yml)

Learn how to leverage AI tools and strategies to build sustainable passive income streams.

**Live Site:** [https://niezdamy.github.io/passive-ai-profits.github.io/](https://niezdamy.github.io/passive-ai-profits.github.io/)

## About The Project

Passive AI Profits is a web platform dedicated to exploring and teaching methods for generating passive income using Artificial Intelligence. The site provides resources, articles, and tools related to:

*   **AI-Powered Content Creation:** Creating blogs, books, and marketing materials.
*   **AI Art & Design:** Generating and selling AI-created artwork and digital assets.
*   **Automated AI Workflows:** Building scalable passive income businesses with AI.

## Tech Stack

This project is built with modern web technologies, including:

*   [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
*   [React](https://reactjs.org/) - JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing.
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
*   [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or newer recommended)
*   pnpm (or npm/yarn)

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/niezdamy/passive-ai-profits.github.io.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd passive-ai-profits.github.io
    ```
3.  Install PNPM packages (recommended due to `pnpm-lock.yaml`):
    ```sh
    pnpm install
    ```
    Alternatively, if you prefer npm or yarn:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running Locally

To start the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

*   `pnpm dev`: Runs the app in development mode.
*   `pnpm build`: Builds the app for production.
*   `pnpm build:static`: Builds the app as a static site for deployment (used for GitHub Pages).
*   `pnpm start`: Starts the production server (after running `pnpm build`).
*   `pnpm lint`: Runs the linter.

## Deployment

This site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml` and uses the output from the `build:static` script (which exports to the `./out` directory).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information. (Note: You'll need to add a LICENSE.txt file if you want to specify a license).
