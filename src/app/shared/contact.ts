/**
 * Contact interface
 * @export
 * @class Contact
 */
export class Contact {
    constructor(
        public time: any,
        public name: string,
        public email: string,
        public comment: string,
        public subject: string
    ) { }
}
