import { ProductFormComponent } from './product-form.component';
import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProductFormComponent', () => {
  describe('Isolated tests', () => {
    let component: ProductFormComponent;

    beforeEach(() => {
      component = new ProductFormComponent();
    });

    it('should set proper initial form state ', () => {
      // given when then
      expect(component.productForm.value).toEqual({
        name: '',
        description: null,
        price: null,
        category: null,
        isActive: null
      });
    });

    it('should set filled name in valid state ', () => {
      // given
      expect(component.productForm.controls.name.valid).toBe(false);

      // when
      component.productForm.controls.name.setValue('test');

      // then
      expect(component.productForm.controls.name.value).toBe('test');
      expect(component.productForm.controls.name.valid).toBe(true);
    });
  });
  describe('Shallow tests', () => {
    let spectator: Spectator<ProductFormComponent>;
    const createComponent = createComponentFactory({
      component: ProductFormComponent,
      imports: [ReactiveFormsModule]
    });

    beforeEach(() => spectator = createComponent());

    it('should show error message if form is invalid', () => {
      // given
      expect(spectator.component.productForm.invalid).toBe(true);

      // when then

      expect(spectator.query('.form-errors')).toExist();
      expect(spectator.query('.form-errors').textContent).toBe('Form is invlid!!');
    });
  });
});
