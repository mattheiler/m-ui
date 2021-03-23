export class Toaster {
  messages = {};

  attach(name, messages) {
    this.messages[name] = messages;
  }

  detach(name) {
    delete this.messages[name];
  }

  open(name, message, options = { duration: 3000 }) {
    const messages = this.messages[name];
    messages.push(message);
    const { duration } = options;
    if (duration != null) {
      setTimeout(() => {
        const index = messages.indexOf(message);
        if (index >= 0) messages.splice(index, 1);
      }, duration);
    }
  }
}
