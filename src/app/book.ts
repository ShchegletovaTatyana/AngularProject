export class Book {
  constructor(
    public id: number,
    public name: string,
    public author?: string,
    public year?: number,
    public description?: string,
  ) {}
}
