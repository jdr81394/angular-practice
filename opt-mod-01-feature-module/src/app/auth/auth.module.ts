import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(
        [
            { path: '', component: AuthComponent }
        ]
    )],
    exports: [RouterModule]
})
export class AuthModule {}