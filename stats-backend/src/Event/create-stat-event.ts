export class CreateStatEvent{
    constructor(
        public readonly date: Date,
        public readonly views: number,
        public readonly clicks: number,
        public readonly cost: number
    ){};
}