

export default async function Home() {
  return (
  <div>
      {/* <Head>
        <title>Your Name - Personal Landing Page</title>
        <meta name="description" content="Welcome to my personal landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <header>
          <h1>Your Name</h1>
          <p>Software Engineer | Web Developer</p>
        </header>

        <section>
          <h2>About Me</h2>
          <p>
            Hi there! I'm Your Name, a passionate software engineer with a strong
            interest in web development. I love building things with code and
            exploring the latest technologies.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="#">Project 1</a> - Brief description of the project.
            </li>
            <li>
              <a href="#">Project 2</a> - Brief description of the project.
            </li>
            {/* Add more projects here */}
          </ul>
        </section>

        <section>
          <h2>Contact Me</h2>
          <p>
            Let's connect! You can reach me at{' '}
            <a href="mailto:Hello">your.email@example.com</a> or
            find me on social media.
          </p>
          {/* Add links to your social media profiles */}
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Nick Huemmer. All rights reserved.</p>
      </footer>
    </div>
  );
}
