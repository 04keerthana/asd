export class Course {
    courseId:number;
    courseName:string;
    duration:number;
    category:string;
    courseOwner:string;
    imageName:string;
    about:string;


constructor(
    courseId:number,
    courseName:string,
    duration:number,
    category:string,
    courseOwner:string,
    imageName:string,
    about:string

)
{
    this.courseId = courseId;
    this.courseName = courseName;
    this.duration = duration;
    this.category= category;
    this.courseOwner=courseOwner;
    this.imageName=imageName;
    this.about=about;
}
}