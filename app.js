class digitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    setInterval(() => {
      this.update();
    }),
      500;
  }

  update() {
    const parts = this.getTimeParts();
    const doubleMinutes = parts.minute.toString().padStart(2, "0");
    const trueTime = `${parts.hour}:${doubleMinutes}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = trueTime;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12,
    };
  }
}
const clockElement = document.querySelector(".clock");
const clockObject = new digitalClock(clockElement);

clockObject.start();
