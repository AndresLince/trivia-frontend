import { FormControl, ValidationErrors } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class UserNameValidator {
    public static hasSpace(control: FormControl): ValidationResult {
        const hasSpace = / +/.test(control.value);

        if (hasSpace) {
            return { hasSpace: true };
        }
        return { hasSpace: false };
    }

    public static getErrorMessage(validationErrors: ValidationErrors): string {
        if (validationErrors['hasSpace']) {
            return 'El nombre de usuario no debe tener espacios';
        }
        if (validationErrors['required']) {
            return 'El nombre de usuario debe ser mas largo';
        }
        if (validationErrors['minlength']) {
            return 'El nombre de usuario debe ser mas largo';
        }
        if (validationErrors['maxlength']) {
            return 'El nombre de usuario debe ser mas corto';
        }
        return '';
    }
}
