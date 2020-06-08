import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatSlideToggleModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatIconModule,
        MatChipsModule,
        MatDialogModule,
        MatSlideToggleModule
    ]
})

export class MaterialModule {}
