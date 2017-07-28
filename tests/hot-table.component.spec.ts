import { Component, DebugElement, NgModule } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HotRegisterer } from '../src/hot-registerer.service';
import { HotTableComponent } from '../src/hot-table.component';
import { HotColumnComponent } from '../src/hot-column.component';

describe('HotTable', () => {
  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let testContainerDe: DebugElement;
  let testContainerEl: HTMLElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [ TestComponent ],
          imports: [ TestModule ]
      }).compileComponents();

      fixture = TestBed.createComponent<TestComponent>(TestComponent);
      fixture.detectChanges();
  });

  afterEach(()=> {
      // fixture.destroy();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // describe(`HotTable`, () => {
  //   it(`should render 'HotTable'`, () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelectorAll('hottable').length).toBe(1);
  //   });
    
  //   it(`should render 'HotTable' with the headers defined as bindings`, () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('.ht_clone_top_left_corner')).not.toBeNull();
  //   });

  //   it(`should render row with height defined in settings object`, () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     // first row is higher than rest because of additional top border
  //     expect(compiled.querySelector('.ht_master tbody tr:nth-child(2)').offsetHeight).toBe(50);
  //   });

  //   it(`should be possible to toggle headers visibility`, () => {
  //     const app = fixture.debugElement.componentInstance;
  //     const compiled = fixture.debugElement.nativeElement;
  //     app.toggleHeaders();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('.ht_clone_top_left_corner th')).toBeNull();
  //   });
  // });
  // describe(`HotColumn`, () => {
  //   it(`should render only three columns of the data`, () => {
  //     const compiled = fixture.debugElement.nativeElement;
  //     // the rowHeaders column is the 4th one
  //     expect(compiled.querySelectorAll('.ht_master col').length).toBe(4); 
  //   });
  //   it(`should increase number of columns`, () => {
  //     const app = fixture.debugElement.componentInstance;
  //     const compiled = fixture.debugElement.nativeElement;
  //     app.addColumn();
  //     fixture.detectChanges();
  //     expect(compiled.querySelectorAll('.ht_master col').length).toBe(5);
  //   });
  //   it(`should decrease number of columns`, () => {
  //     const app = fixture.debugElement.componentInstance;
  //     const compiled = fixture.debugElement.nativeElement;
  //     app.removeColumn();
  //     fixture.detectChanges();
  //     expect(compiled.querySelectorAll('.ht_master col').length).toBe(3);
  //   });
  // });
});

////////// Fakes ///////////
@NgModule({
  declarations: [ HotTableComponent, HotColumnComponent ],
  exports: [ HotTableComponent, HotColumnComponent ],
})
class TestModule { }

@Component({
  selector: 'test-component',
  template: `<hot-table></hot-table>`,
})
class TestComponent { }
