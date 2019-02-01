import { TestBed } from '@angular/core/testing';

import { LineChartDemoService } from './line-chart-demo.service';

describe('LineChartDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineChartDemoService = TestBed.get(LineChartDemoService);
    expect(service).toBeTruthy();
  });
});
