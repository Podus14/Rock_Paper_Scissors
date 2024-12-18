
export type Choice = "Paper" | "Rock" | "Scissors";

export type Outcome = "You Win!" | "You Lose!" | "It's a Tie!"

export type Score = {
    playerChoice: Choice,
    computerChoice: Choice, 
    outcome: Outcome
}