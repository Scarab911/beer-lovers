export class Item {

    constructor(
        public id: number,
        public name: string,
        public tagline: string,
        public abv: number,
        public image_url: string,
        public description?: string,
        public food_pairing?: string [],
        public ph?: number
    ){}
}
