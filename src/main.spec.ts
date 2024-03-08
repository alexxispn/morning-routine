import { describe, it, expect } from "vitest"

class MorningRoutine {
  whatShouldIDoNow(): string {
    return "Do exercise"
  }
}

describe("MorningRoutine", () => {
  it("when 06:30 I should do exercise", () => {
    const morningRoutine = new MorningRoutine()

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Do exercise")
  })
})
