export interface Card
{
    title: string,
    text: string,
    type : CardType
}

export enum CardType
{
    Single,
    Multi
}