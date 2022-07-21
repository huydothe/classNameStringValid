export class EmailValid {
    private email:RegExp=/^[CAP]{1}\d+[GHIKLM]$/;
    public EmailValid(email:string):boolean{
        return this.email.test(email);
    }
}