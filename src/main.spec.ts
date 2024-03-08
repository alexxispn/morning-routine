import { describe, expect, it } from "vitest"

class MorningRoutine {
  private currentTime: Date

  private constructor(currentTime: Date) {
    this.currentTime = currentTime
  }

  static createFromDate(currentTime: Date) {
    return new MorningRoutine(currentTime)
  }

  whatShouldIDoNow(): string {
    if (!this.currentTime) return "Do exercise"
    if (this.currentTime?.getTime() > new Date("2024-3-8 07:30:00").getTime()) return "Study"
    if (this.currentTime?.getTime() > new Date("2024-3-8 07:00:00").getTime()) return "Read"
    return "Do exercise"
  }
}

describe("MorningRoutine", () => {
  it("when 06:30 I should do exercise", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date("2024-3-8 06:30:00"))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Do exercise")
  })

  it("when 07:15 I should read", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date("2024-3-8 07:15:00"))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Read")
  })

  it("when 07:45 I should study", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date("2024-3-8 07:45:00"))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Study")
  })
})
