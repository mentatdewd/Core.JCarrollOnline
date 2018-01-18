/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SandboxComponent } from './sandbox.component';

let component: SandboxComponent;
let fixture: ComponentFixture<SandboxComponent>;

describe('sandbox component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SandboxComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SandboxComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});