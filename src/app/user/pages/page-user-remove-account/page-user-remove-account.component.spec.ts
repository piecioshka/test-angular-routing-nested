import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserRemoveAccountComponent } from './page-user-remove-account.component';

describe('PageUserRemoveAccountComponent', () => {
    let component: PageUserRemoveAccountComponent;
    let fixture: ComponentFixture<PageUserRemoveAccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageUserRemoveAccountComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageUserRemoveAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
