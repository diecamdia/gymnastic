import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ToastrTypes } from "../models/toastr.model";

@Injectable()
export class ToastrCustomService {

    toastrConfig = {
        progressBar: true,
        closeButtom: true,

    };

    constructor(public toastr: ToastrService) { }

    trigger(toastrType: string, title: string, message: string) {
        switch (toastrType.toLowerCase()) {
            case ToastrTypes.Success:
                this.toastr.success(message, title, this.toastrConfig);
                break;
            case ToastrTypes.Warning:
                this.toastr.warning(message, title, this.toastrConfig);
                break;
            case ToastrTypes.Error:
                this.toastr.error(message, title, this.toastrConfig);
                break;
            case ToastrTypes.Info:
                this.toastr.info(message, title, this.toastrConfig);
                break;
        }
    }
}
