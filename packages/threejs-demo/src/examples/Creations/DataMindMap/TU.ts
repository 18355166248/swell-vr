export default class TU {
  constructor() {
    (this.status = EU.PAUSED), (this.state = AU);
  }
  set(t) {
    this.state = af(this.state, t);
  }
  start() {
    this.status = EU.RUNNING;
  }
  pause() {
    this.status = EU.PAUSED;
  }
}
