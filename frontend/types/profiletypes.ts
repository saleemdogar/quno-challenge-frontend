export interface ProfileType{
    name:string;
    avatarUrl:string;
    basePrice:number;
    city:string;
    country:string;
    qunoScoreNumber:number;
    qunoScoreText:string;
    ratingsAverage:number;
    reviews:reviewsType[];
    slug:string;
    treatmentsLastYear:number;
    yearsExperience:number;
}

export interface reviewsType{
    patientName:string;
    country:string;
    date:string;
    headline:string;
    content:string;
}

export enum FilterKes {
    BEST_CONO_SCORE = "bestQunoscore",
    BEST_REVIEWS = "bestreviews",
    LOWEST_PRICE = "lowestprice",
}

export enum BestScore{
    EXCELENT="Excelent",
}