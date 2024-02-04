class ClassNamesFactory {
  constructor(...classes) {
    this.classes = classes;
  }

  addIf(condition, className) {
    condition && this.classes.push(className);
    return this;
  }

  build() {
    return this.classes.join(" ");
  }
}

export function classNames(...classes) {
  return new ClassNamesFactory(...classes);
}
