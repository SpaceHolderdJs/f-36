class Observer {
  constructor(events = {}) {
    this.events = events;
  }

  on(event, listenerFunc) {
    if (this.events[event]) {
      this.events[event].push(listenerFunc);
      return;
    }

    this.events[event] = [listenerFunc];
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach((listenerFunc) => listenerFunc(data));
  }
}
