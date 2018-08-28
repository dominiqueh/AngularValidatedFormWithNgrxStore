export class Toaster {
    constructor(
        public brandName: string,
        public description: string,
        public alwaysToast: string,
    ) { }
}

export const initialToaster: Toaster = {
    brandName: '',
    description: '',
    alwaysToast: 'Rye'
};
