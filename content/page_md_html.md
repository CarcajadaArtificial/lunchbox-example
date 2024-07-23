```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>Welcome to the Sample HTML Page</h1>
      <p>This is a sample paragraph showcasing <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.</p>
      <button class="button">Primary Button</button>
      <button class="button button--secondary">Secondary Button</button>
    </section>

    <section id="about">
      <h2>About Us</h2>
      <p>Learn more about what we do and our mission to provide the best services.</p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit" class="button">Send Message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Sample HTML Page. All rights reserved.</p>
  </footer>
</body>
</html>
```
