export class CreateStatEvent{
    constructor(
        public readonly date: Date,
        public readonly views: Date,
        public readonly clicks: Date,
        public readonly cost: Date
    ){};
}