export class Recipe {
  // we define how a single recipe looks like
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    // with the constructor we can instantiate
    // constructor is a built in function that every class has
    //  will be executed once you create a instance of this class
    this.name = name;
    // this.name refers to the name of the property on the class
    this.description = desc;
    this.imagePath = imagePath;
  }
}
