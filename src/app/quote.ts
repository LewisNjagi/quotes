export class Quote {
    public votes = 0;
    constructor(
      public name: string,
      public body: string,
      public author: string,
      public date: Date = new Date()
    ) {}
  }
  