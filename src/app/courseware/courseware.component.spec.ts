import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareComponent } from './courseware.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../shared/shared.module';
import { CoursewareService } from './courseware.service';

describe('CoursewareComponent', () => {
    let component: CoursewareComponent;
    let fixture: ComponentFixture<CoursewareComponent>;
    let service: CoursewareService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CoursewareComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [CoursewareService],
        })
            .compileComponents();

        service = TestBed.inject(CoursewareService);
        fixture = TestBed.createComponent(CoursewareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return the list all designs', () => {
        const params = {
            total_per_page: '10',
            order_by: 'name',
            order_orientation: 'asc'
        }

        const result = service.getListAllDesigns(params);
        expect(result).toBe(result);
    });

});
