import { AbstractControl,ValidationErrors } from "@angular/forms";

export function domainvalidators(control:AbstractControl):any{

    if(control.value?.includes('@capgemini.com')){
        return null;
    }
    else{
        return{'domainvalidator':'Invalid domain'}
    }
}