import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-reporte',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule],
  templateUrl: './nuevo-reporte.page.html',
  styleUrls: ['./nuevo-reporte.page.scss'],
})
export class NuevoReportePage {
  reporteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reporteForm = this.fb.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['Crítico', Validators.required],
    });
  }

  guardarReporte() {
    if (this.reporteForm.valid) {
      const data = this.reporteForm.value;
      console.log('📝 Nuevo reporte:', data);

      // Aquí puedes guardar en Firebase o donde sea necesario

      alert('Reporte guardado con éxito ✅');
      this.router.navigate(['/home']);
    }
  }
}