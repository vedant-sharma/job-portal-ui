export class PostJobModel
{
    title:  string;
    company : string;
    description : string;
}

export class paginateModel
{
    page : number = 1;
    pageSize : number;
    totalItem: number = 0;
}