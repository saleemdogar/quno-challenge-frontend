export interface ProfileType{
    name:string;
    avatarUrl:string;
    basePrice:string;
    city:string;
    country:string;
    qunoScoreNumber:number;
    qunoScoreText:string;
    ratingsAverage:string;
    reviews:reviews[];
    slug:string;
    treatmentsLastYear:number;
    yearsExperience:number;
}

export interface reviews{
    patientName:string;
    country:string;
    date:string;
    headline:string;
    content:string;
}