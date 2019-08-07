import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { WorkshopService } from './workshop.service';

describe('WorkshopService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularMaterialsModModule
      ]
    })
  }));

  it('should be created', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    expect(service).toBeTruthy();
  });
});
