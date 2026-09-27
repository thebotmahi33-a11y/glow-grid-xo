# Glow Grid XO

A small, polished Tic Tac Toe game built with **HTML, CSS, and vanilla JavaScript**, featuring a neon-inspired UI, animated transitions, Player vs Player mode, and a defensive Computer opponent.

## ✨ Features

- 🎮 Player vs Player mode
- 🤖 Player vs Computer mode
- 🌌 Neon cyber-style interface
- ✨ Animated splash screen and board entrance
- 🏆 Win and draw detection
- 🔄 Quick rematch flow
- 📱 Responsive, lightweight, and browser-based
- 🚫 No frameworks or external runtime dependencies

## 🚀 Live Demo

[**Play Glow Grid XO →**](https://glow-grid-xo.vercel.app/)

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- CSS animations and transitions

## 🎮 How to Play

Choose a game mode from the opening screen.

**Player vs Player:** Two people take turns as X and O.

**Player vs Computer:** You play as X while the computer plays as O. The computer uses a defensive move-selection strategy that prioritizes blocking immediate threats, then choosing the center, corners, and edges.

Click any empty cell to make a move. The game automatically detects wins and draws, then lets you start another match or quit.

## 📁 Project Structure

```text
tic-tac-toe-neon/
├── index.html   # Game structure and UI
├── style.css    # Neon theme, layout, and animations
├── script.js    # Game state, rules, and computer logic
└── README.md    # Project documentation
```

## 🧠 Computer Logic

The Computer opponent currently uses a simple priority-based strategy:

1. Block an immediate winning move by the player.
2. Take the center when available.
3. Take an available corner.
4. Take an available edge.

This keeps the game lightweight while giving the computer a basic defensive challenge.

## 🖥️ Run Locally

No build step is required.

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/thebotmahi33-a11y/tic-tac-toe-neon.git
cd tic-tac-toe-neon
```

Then open `index.html`.

## 📌 Roadmap

Possible future improvements:

- Difficulty levels for the Computer opponent
- Minimax-based unbeatable mode
- Scoreboard and match history
- Sound effects and optional background music
- Theme customization
- Improved mobile-first controls
- Better accessibility and keyboard navigation

## 📄 License

This project is open for personal and educational use. Add a formal license here if you want to distribute the code under specific terms.

---

Built as a small frontend game experiment with a focus on interaction, animation, and clean vanilla JavaScript.
