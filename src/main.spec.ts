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
    const currentTime = this.currentTime.getTime()

    if (currentTime > new Date(this.currentTime.setHours(7, 30)).getTime()) return "Study"
    if (currentTime > new Date(this.currentTime.setHours(7, 0)).getTime()) return "Read"
    return "Do exercise"
  }
}

describe("MorningRoutine", () => {
  const today = new Date()
  it("when 06:30 I should do exercise", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date(today.setHours(6, 30)))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Do exercise")
  })

  it("when 07:15 I should read", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date(today.setHours(7, 15)))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Read")
  })

  it("when 07:45 I should study", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date(today.setHours(7, 45)))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Study")
  })

  it("when 06:30 tomorrow I should do exercise", () => {
    const tomorrow = new Date(today.setDate(today.getDate() + 1))
    const morningRoutine = MorningRoutine.createFromDate(new Date(tomorrow.setHours(6, 30)))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Do exercise")
  })

  it("when 08:30 I should Have breakfast", () => {
    const morningRoutine = MorningRoutine.createFromDate(new Date(today.setHours(8, 30)))

    const whatShouldIDo = morningRoutine.whatShouldIDoNow()

    expect(whatShouldIDo).toBe("Have breakfast")
  })
})
