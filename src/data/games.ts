// ═══════════════════════════════════════════════════════════════════════════
//  FIXORAA — FUN ZONE GAMES LIST
// ═══════════════════════════════════════════════════════════════════════════
//
//  THIS FILE IS THE SINGLE SOURCE OF TRUTH FOR THE FUN ZONE GAMES.
//  The "Fun Zone" section on the landing page and the games listing page
//  are rendered automatically from the `games` list below. You never need
//  to touch any page file to add or edit a game.
//
//  ----------------------------------------------------------------------
//  HOW TO ADD A NEW GAME (takes 30 seconds)
//  ----------------------------------------------------------------------
//  Add one line inside the `games` array below:
//
//    { name: "Game Name", slug: "game-slug", url: "/games/game-slug", blurb: "One short line about the game." },
//
//  The 4 fields mean:
//    • name  — the game name shown on the website (e.g. "Chess vs AI")
//    • slug  — a short, lowercase, URL-safe id, no spaces (e.g. "chess").
//              It must be UNIQUE across all games in this file.
//    • url   — the page address of the game. Games live ON this website,
//              so use an internal link starting with /games/ (NOT the
//              PASTE-YOUR-TOOL-URL-HERE placeholder used in tools.ts).
//    • blurb — one short sentence (under ~80 characters) describing the game.
//  Save the file — the new game appears everywhere automatically. Done.
//
//  ----------------------------------------------------------------------
//  HOW TO REMOVE A GAME
//  ----------------------------------------------------------------------
//  Delete its one line from the `games` array. It disappears everywhere.
//
//  ----------------------------------------------------------------------
//  RULES — PLEASE READ
//  ----------------------------------------------------------------------
//  • NEVER hardcode game names, links or counts inside page files.
//    Always read from the `games` export here.
//  • Games are played on fixoraa.tech itself, so their `url`s stay as
//    internal /games/... links — they are never external placeholders.

export interface Game {
  name: string;
  slug: string;
  url: string;
  blurb: string;
}

export const games: Game[] = [
  { name: "Chess vs AI", slug: "chess", url: "/games/chess", blurb: "Play chess against the computer — 3 difficulty levels" },
  { name: "Sudoku Daily", slug: "sudoku", url: "/games/sudoku", blurb: "A fresh Sudoku puzzle every day with hints and timer" },
  { name: "Daily Word", slug: "daily-word", url: "/games/daily-word", blurb: "Guess the 5-letter word in 6 tries — new word every day" },
  { name: "BlockDrop", slug: "tetris", url: "/games/tetris", blurb: "The classic falling-block arcade game — levels and high scores" },
];
