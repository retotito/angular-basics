import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert("an unexpected eroor occurred");
        console.log(error);
    }
}