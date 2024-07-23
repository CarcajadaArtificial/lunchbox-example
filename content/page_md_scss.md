```scss
// Define color variables
$primary-color: #3498db;
$secondary-color: #2ecc71;
$background-color: #1c1c1c;
$text-color: #ecf0f1;

// Mixin for flex center
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Dark mode styles
body {
  background-color: $background-color;
  color: $text-color;
  font-family: 'Arial, sans-serif';
}

// Button styles
.button {
  background-color: $primary-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

// Responsive design
.container {
  @include flex-center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

// Secondary button modifier
.button--secondary {
  background-color: $secondary-color;

  &:hover {
    background-color: darken($secondary-color, 10%);
  }
}
```
