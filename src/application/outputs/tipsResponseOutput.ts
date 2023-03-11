import Tips from "../../domain/models/Tips";

export default class TipsResponseOutput {
    constructor(private tips: Tips[]) {}

    getData(): {tips: string, description: string}[] {
        return this.tips.map((el: Tips) => {
            return {
                tips: el.tips,
                description: el.description
            }
        })
    }
}