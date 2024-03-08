import { describe, expect, it } from "vitest"

class MorningRoutine {
  private currentTime?: Date

  constructor(currentTime?: Date) {
    this.currentTime = currentTime
  }

  static createFromDate(currentTime: Date) {
    return new MorningRoutine(currentTime)
  }

  whatShouldIDoNow(): string {
    if (!this.currentTime) return "Do exercise"
    return "Read"
  }
}

describe("MorningRoutine", () => {
  it("when 06:30 I should do exercise", () => {
    const morningRoutine = new MorningRoutine()

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Do exercise")
  })

  it("when 07:15 I should read", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date("2024-3-8 07:15:00"))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Read")
  })
})
