/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ShowErrorsComponent } from './show-errors.component';

let component: ShowErrorsComponent;
let fixture: ComponentFixture<ShowErrorsComponent>;

describe('showErrors component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ShowErrorsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ShowErrorsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});