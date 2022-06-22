class MinStack {
  private stack: number[];
  private mintrace: number[];

  constructor() {
    this.stack = [];
    this.mintrace = [];
  }

  push(num: number) {
    this.stack.push(num);
    num = Math.min(num, this.mintrace[this.mintrace.length - 1]);
    this.mintrace.push(num);
  }

  pop() {
    this.stack.pop();
    this.mintrace.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.mintrace[this.mintrace.length - 1];
  }
}
